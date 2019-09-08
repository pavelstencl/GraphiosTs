import { GraphTsSchema, GraphTsResponse, GraphTsOperationsList, GraphTsInputValidation, GraphTsRequest } from "./types/graphTsSchema";
import { GraphiosTsSettings } from './types';
import { AxiosInstance } from 'axios';

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
        this.axios = axios
        this.settings = settings;
    }
    /**
     * Creates new request object.
     * @param operation name of GraphQl operation type
     * @param name name of GraphTs Schema
     */
    public create<U extends keyof T,K extends keyof T[U]>(operation:U,name:K){
        return new GraphiosTsRequest<T[U][K]>(name as string,operation as keyof GraphTsOperationsList,this.request.bind(this));
    }
    private request(pld:GraphiosTsRequest<any>){
        return new Promise((resolve,reject)=>{
            resolve('asd');
        })
    }
}



export class GraphiosTsRequest<S extends GraphTsSchema> {
    private _payload:any;
    private _filters:any;
    constructor(private name:string,private operation:keyof GraphTsOperationsList,private graphiosTsCallback:(pld:GraphiosTsRequest<any>)=>Promise<any>){
        this.name = name;
        this.operation = operation;
        this._filters = {};
        this._payload = [{}];
        this.graphiosTsCallback = graphiosTsCallback;
    }
    //GraphTsInputValidation<T,GraphTsRequest<S>> &  
    public request<T>(payload:GraphTsInputValidation<T,GraphTsRequest<S>,false> & GraphTsRequest<S>):Promise<GraphTsResponse<T,S>>{
        return new Promise((resolve,reject)=>{
            resolve(payload as unknown as GraphTsResponse<T,S>);
        })
    }
    public graphQlQuery(){

    }
}