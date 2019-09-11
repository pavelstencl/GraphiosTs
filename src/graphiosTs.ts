import { Str, GraphiosTsSettings, GraphTsQueue, GraphiosTsRequestSettings } from "./types";
import Axios, { AxiosInstance } from "axios";
import { GraphiosTsRequest } from "./graphiosTsRequest";
import { GraphTsPayload, GraphTsSchema } from "./types/schema";
import swapiGraphiosTs from "../.gql/swapi.graphql";

/**
 * GraphiosTs instance holding connection with one server entrypoint.
 * ____
 * GraphiosTs is dynamic GraphQl client build on top of Axios instance. All axios request settings are implemented in GraphiosTs settings.
 * For more information visit [GitHub](https://github.com/pavelstencl/GraphiosTs)
 */

export class GraphiosTs<T extends GraphTsSchema>{
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
     */
    public create<U extends keyof T>(operation:U,name?:string){
        return new GraphiosTsRequest<T[U],any>(name,operation,this.__req.bind(this));
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
    private request(query:string,type:string | symbol | number,settings?:GraphiosTsRequestSettings){
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