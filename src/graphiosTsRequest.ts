import { JSON_ARGS_TO_GQL_REGEXP } from "./config";
import { GraphiosTsRequestSettings, GraphiosTsCallback } from "./types";
import { GraphTsPayload, RequestPayload, Validate, ResultPayload, GraphTsObject } from "./types/schema";
import { GraphiosTsGenericError, GraphiosTsParseError } from "./errors";



export class GraphiosTsRequest<S extends GraphTsPayload,X> {
    //Stores payload
    private payload:X;
    public settings?:GraphiosTsRequestSettings;
    public  readonly operation:'query'|'mutation'|'subscription';
    private requested:true;
    constructor(
        public readonly _name:string | undefined,
        operation:string | symbol | number,
        private graphiosTsCallback:GraphiosTsCallback
    ){
        this._name = _name;
        this.operation = operation.toString() as 'query'|'mutation'|'subscription';
        this.graphiosTsCallback = graphiosTsCallback;
    }
    /**
     * Sends request to a server
     */
    public request(settings?:GraphiosTsRequestSettings):Promise<ResultPayload<X,S>>{
        if(!this.payload){
            throw new GraphiosTsGenericError('02','Payload missing. Call `gql` method first')
        }
        if(!this.requested){
            this.settings = settings;
            this.requested = true;
            return this.graphiosTsCallback(this);
        }else{
            return Promise.reject(new GraphiosTsGenericError('03','Request has been already send. If you want to send another one, use refetch method instead.'));
        }
    }
    /**
     * Sends another request to a server
     */
    public refetch():Promise<ResultPayload<X,S>>{
        if(this.requested){
            return this.graphiosTsCallback(this);
        }else{
            throw new GraphiosTsGenericError('04','`Refetch` method can be called only when `request` method is called. Call `request` method first');
        }
        
    }
    /**
     * GraphiosTs request data constructor
     * @param payload 
     */
    public gql<T>(payload:T & RequestPayload<S> & Validate<T,RequestPayload<S>>){
        this.payload = payload as unknown as X;
        return this as unknown as GraphiosTsRequest<S,T>;
    }
    /**
     * Creates GraphQl command string
     * @param partial If true, it will return only logic part of query
     */
    public parse(partial?:boolean):string | string[];
    public parse(partial:true):string[];
    public parse(partial?:false):string;
    public parse(partial?:boolean):string | string[]{
        const data = this.payload;
        if(data && typeof data === 'object' && ! Array.isArray(data) && data !== null){
            const out:string[] = [];
            for (const key in data) {
                out.push(this.resolveObject(data[key] as unknown as GraphTsObject,key));
            }
            if(partial === true){
                return out;
            }
            else{
                return this.operation+(this._name?' '+this._name:'')+'{'+out.join(',')+'}';
            }
        }else{
            throw new GraphiosTsParseError('01','Data mismatch. Gql payload has to be a plain object');
        }
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
                    const payload = obj.payload as {[key:string]:any};
                    if(payload && typeof payload === 'object' && Object.keys(payload).length === 1){
                        out +=':'+Object.keys(payload)[0];
                        return this.resolveObject(payload[Object.keys(payload)[0]],out);
                    }else{
                        throw new GraphiosTsParseError('02','Alias requires payload field which is an object with exactly one item in it.');
                    }
            }
        }
        //Arguments definition
        if(obj.args && Object.keys(obj.args).length !== 0){
            out+=this.composeArgs(obj.args);
        }
        //Payload definition
        if(obj.payload && typeof obj.payload ==='object'){
            const payload = obj.payload as {[key:string]:any};
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