import { JSON_ARGS_TO_GQL_REGEXP } from "./config";
import { GraphTsObject, GraphTsInputValidation, GraphTsRequest, GraphTsOperationsList, GraphTsResponse, GraphTsSchema } from "./types/graphTsSchema";
import { GraphQlError, GraphiosTsRequestSettings } from "./types";

export class GraphiosTsRequest<S extends GraphTsSchema,X,N extends string> {
    //Stores payload
    private _payload:X;
    private graphiosTsCallback:(req:GraphiosTsRequest<S,X,N>)=>Promise<{data:{[P in N]:GraphTsResponse<X,S>}|null;errors?:GraphQlError}>;
    private _alias:string;
    private _operationName:string;
    public settings?:GraphiosTsRequestSettings;
    constructor(private name:N,public operation:keyof GraphTsOperationsList,graphiosTsCallback){
        this.name = name;
        this.operation = operation;
        this.graphiosTsCallback = graphiosTsCallback;
    }
    /**
     * Sends request to a server
     */
    public request(settings?:GraphiosTsRequestSettings){
        this.settings = settings;
        return this.graphiosTsCallback(this);
    }
    /**
     * GraphiosTs request data constructor
     * @param payload 
     */
    public gql<T>(payload:GraphTsInputValidation<T,GraphTsRequest<S>,false> & GraphTsRequest<S>):GraphiosTsRequest<S,T,N>{
        //@ts-ignore
        this._payload = payload;
        return this as unknown as GraphiosTsRequest<S,T,N>;
    }
    /**
     * Unique name the operation for easier debuging
     * @param name 
     */
    public operationName(name:string):this{
        this._operationName = name;
        return this;
    }
    /**
     * Creates GraphQl command string
     * @param partial If true, it will return only logic part of query
     */
    public parse(partial?:boolean):string{
        const data = this._payload;
        if(typeof data === 'object' && ! Array.isArray(data) && data !== null){
            return !partial? this.getOperationName()+"{"+this.resolveObject(data as GraphTsObject,this.getName())+"}":this.resolveObject(data as GraphTsObject,this.getName());
        }else{
            return !partial? this.getOperationName()+"{"+this.getName()+"}":this.getName();
        }
    }
    private getOperationName(){
        return this._operationName?this.operation+" "+(this._operationName)+" ":this.operation;
    }
    /**
     * Returns name or aliased name
     */
    private getName(){
        return this._alias?this._alias+":"+this.name:this.name;
    }
    /**
     * Gives alias to the command.
     * @param al Alias name
     */
    public alias<T extends string>(al:T):GraphiosTsRequest<S,X,T>{
        this._alias = al;
        return this as unknown as GraphiosTsRequest<S,X,T>;
    }
    /**
     * Compiles GraphTsObject to GraphQl command string
     * @param obj 
     * @param name 
     */
    private resolveObject(obj:GraphTsObject,name:string){
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