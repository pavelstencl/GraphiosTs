import { GraphTsOperationsList } from "./types/graphTsSchema";
import { Str, GraphiosTsSettings, GraphTsQueue, GraphiosTsRequestSettings } from "./types";
import { AxiosInstance } from "axios";
import { GraphiosTsRequest } from "./graphiosTsRequest";

/**
 * GraphiosTs instance holding connection with one server entrypoint.
 * ____
 * GraphiosTs is dynamic GraphQl client build on top of Axios instance. All axios request settings are implemented in GraphiosTs settings.
 * For more information visit [GitHub](https://github.com/pavelstencl/GraphiosTs)
 */

export class GraphiosTs<T extends GraphTsOperationsList>{
    private queue:GraphTsQueue
    /**
     * @param axios Instance of Axios. For more information visit [GitHub](https://github.com/axios/axios)
     * @param settings GraphiosTs settings
     */
    constructor(private axios:AxiosInstance,private settings?:GraphiosTsSettings){
        this.axios = axios;
        this.settings = settings;
        this.queue = {
            query:[],
            mutation:[],
            subscription:[]
        }
    }
    /**
     * Creates new request object.
     * @param operation name of GraphQl operation type
     * @param name name of GraphTs Schema
     */
    public create<U extends keyof T,K extends keyof T[U]>(operation:U,name:Str<K>){
        return new GraphiosTsRequest<T[U][K],any,Str<K>>(name,operation as keyof GraphTsOperationsList,this.__req.bind(this));
    }
    /**
     * Callback method for GraphiosTsRequest class
     * @param req 
     */
    private __req(req){
        if(req instanceof GraphiosTsRequest){
            if(!req.settings || (req.settings && req.settings.batched !== true)){
                return this.request(req.parse(),req.operation,req.settings);
            }else if(req.settings && req.settings.batched === true && this.settings && this.settings.batch === true){

            }else{
                throw new Error('')
            }
        }else{
            throw new Error('')
        }
    }
    private request(query:string,type:string,settings?:GraphiosTsRequestSettings){
        let axiosConfig = this.mergeSettings(settings);
        axiosConfig.headers = {...axiosConfig.headers,...{'Content-Type':this.settings? this.settings.contentType:'application/json'}};
        axiosConfig.data = {[type]:query};
        return new Promise((resolve,reject)=>{
            this.axios.request(axiosConfig).then((response)=>{
                resolve(response.data);
            }).catch((e)=>{
                reject(e);
            })
        })
    }
    private mergeSettings(reqSet?:GraphiosTsRequestSettings){
        return {...this.settings && this.settings.axios?this.settings.axios:{},...reqSet && reqSet.axios?reqSet.axios:{}}
    }
}