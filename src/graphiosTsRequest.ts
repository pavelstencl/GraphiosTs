import { JSON_ARGS_TO_GQL_REGEXP } from "./config";
import { GraphQlError, GraphiosTsRequestSettings } from "./types";
import { GraphTsPayload, RequestPayload, Validate, GraphTsSchema, ResultPayload, GraphTsObject } from "./types/schema";



export class GraphiosTsRequest<S extends GraphTsPayload,X> {
    //Stores payload
    private _payload:X;
    public settings?:GraphiosTsRequestSettings;
    public operation:'query'|'mutation'|'subscription';
    constructor(public _name:string | undefined,operation:string | symbol | number,private graphiosTsCallback){
        this._name = _name;
        this.operation = operation.toString() as 'query'|'mutation'|'subscription';
        this.graphiosTsCallback = graphiosTsCallback;
    }
    /**
     * Sends request to a server
     */
    public request(settings?:GraphiosTsRequestSettings):Promise<{data?:ResultPayload<X,S>;errors?:GraphQlError}>{
        this.settings = settings;
        return this.graphiosTsCallback(this);
    }
    /**
     * GraphiosTs request data constructor
     * @param payload 
     */
    public gql<T>(payload:T & RequestPayload<S> & Validate<T,RequestPayload<S>>){
        //@ts-ignore
        this._payload = payload;
        return this as unknown as GraphiosTsRequest<S,T>;
    }
    /**
     * Creates GraphQl command string
     * @param partial If true, it will return only logic part of query
     */
    public parse(partial?:boolean):string{
        const data = this._payload;
        if(data && typeof data === 'object' && ! Array.isArray(data) && data !== null){
            const out:string[] = [];
            for (const key in data) {
                out.push(this.resolveObject(data[key] as unknown as GraphTsObject,key));
            }
            if(partial === true){
                return out.join(',');
            }
            else{
                return this.operation+(this._name?' '+this._name:'')+'{'+out.join(',')+'}';
            }
        }else{
            throw TypeError('Data mismatch. Gql payload has to be a plain object');
        }
        /*
        if(typeof data === 'object' && ! Array.isArray(data) && data !== null){
            return !partial? this.getOperationName()+"{"+this.resolveObject(data as GraphTsObject,this.getName())+"}":this.resolveObject(data as GraphTsObject,this.getName());
        }else{
            return !partial? this.getOperationName()+"{"+this.getName()+"}":this.getName();
        }*/
    }
    /**
     * Compiles GraphTsObject to GraphQl command string
     * @param obj 
     * @param name 
     */
    private resolveObject(obj:GraphTsObject,name:string):string{
        //Name definition
        let out = name;
        if(obj.__type){
            switch(obj.__type){
                case 'fragment':
                    out = '...on '+name.substr(4);
                break;
                case 'alias':
                    if(obj.payload && typeof obj.payload === 'object' && Object.keys(obj.payload).length === 1){
                        out +=':'+Object.keys(obj.payload)[0];
                        return this.resolveObject(obj.payload[Object.keys(obj.payload)[0]],out);
                    }else{
                        throw new TypeError('Alias requires payload field which is an object with exactly one item in it.');
                    }
            }
        }
        //Arguments definition
        if(obj.args && Object.keys(obj.args).length !== 0){
            out+=this.composeArgs(obj.args);
        }
        //Payload definition
        const payload = obj.payload;
        if(payload && typeof payload ==='object'){
            out+="{";
            for (const key in payload) {
                out+=typeof payload[key] === 'object'?this.resolveObject(payload[key],key)+',':key+','
            }
            out = out.substring(0,out.length-1)+'}';
        }
        return out;
    }
    /**
     * Creates arguments string
     * @param args GraphiosTs args object
     */
    private composeArgs(args:{[key:string]:any}):string{
        let json = JSON.stringify(args);
        json = json.substr(1,json.length-2);
        return "("+json.replace(JSON_ARGS_TO_GQL_REGEXP,"$1:")+")";
    }
}