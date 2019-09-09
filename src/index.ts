import { GraphTsSchema, GraphTsOperationsList, GraphTsInputValidation, GraphTsRequest, GraphTsObject, GraphTsResponse } from "./types/graphTsSchema";
import { GraphiosTsSettings, Str, GraphQlError } from './types';
import Axios, { AxiosInstance } from 'axios';
import { isFragment } from './utils/isFragment';
import { JSON_ARGS_TO_GQL_REGEXP } from "./config";


/**
 * GraphiosTs instance holding connection with one server entrypoint.
 * ____
 * GraphiosTs is dynamic GraphQl client build on top of Axios instance. All axios request settings are implemented in GraphiosTs settings.
 * For more information visit [GitHub](https://github.com/pavelstencl/GraphiosTs)
 */

export class GraphiosTs<T extends GraphTsOperationsList>{
    /**
     * @param axios Instance of Axios. For more information visit [GitHub](https://github.com/axios/axios)
     * @param settings GraphiosTs settings
     */
    constructor(private axios:AxiosInstance,private settings?:GraphiosTsSettings){
        this.axios = Axios.create();
        this.settings = settings;
    }
    /**
     * Creates new request object.
     * @param operation name of GraphQl operation type
     * @param name name of GraphTs Schema
     */
    public create<U extends keyof T,K extends keyof T[U]>(operation:U,name:Str<K>){
        return new GraphiosTsRequest<T[U][K],any,Str<K>>(name,operation as keyof GraphTsOperationsList,this.__req.bind(this));
    }
    private __req(req){
        if(req instanceof GraphiosTsRequest){
            return new Promise((resolve,reject)=>{
                resolve();
            })
        }else{
            throw new Error('')
        }
    }
}



export class GraphiosTsRequest<S extends GraphTsSchema,X,N extends string> {
    //Stores payload
    private _payload:X;
    private graphiosTsCallback:(req:GraphiosTsRequest<S,X,N>)=>Promise<{data:{[P in N]:GraphTsResponse<X,S>}|null;errors?:GraphQlError}>;
    private _alias:string;
    constructor(private name:N,private operation:keyof GraphTsOperationsList,graphiosTsCallback){
        this.name = name;
        this.operation = operation;
        this.graphiosTsCallback = graphiosTsCallback;
    }
    public request(){
        return this.graphiosTsCallback(this);
    }
    public gql<T>(payload:GraphTsInputValidation<T,GraphTsRequest<S>,false> & GraphTsRequest<S>):GraphiosTsRequest<S,T,N>{
        //@ts-ignore
        this._payload = payload;
        return this as unknown as GraphiosTsRequest<S,T,N>;
    }
    public parse():string{
        const data = this._payload;
        if(typeof data === 'object' && ! Array.isArray(data) && data !== null){
            return this.operation+"{"+this.resolveObject(data as GraphTsObject,this.getName())+"}";
        }else{
            return this.operation+"{"+this.getName()+"}";
        }
    }
    private getName(){
        return this._alias?this._alias+":"+this.name:this.name;
    }
    public alias<T extends string>(al:T):GraphiosTsRequest<S,X,T>{
        this._alias = al;
        return this as unknown as GraphiosTsRequest<S,X,T>;
    }
    
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

export {isFragment}