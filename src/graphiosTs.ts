import { GraphiosTsSettings, GraphiosTsRequestSettings, GraphQlError, Resolve, Reject } from "./types";
import { AxiosInstance, AxiosError, AxiosRequestConfig } from "axios";
import { GraphiosTsRequest } from "./graphiosTsRequest";
import { GraphTsSchema } from "./types/schema";
import { GraphiosTsResponseError, GraphiosTsDataError, GraphiosTsNetworkError, GraphiosTsGenericNetworkError } from "./errors";
import { getSettings } from "./utils/getSettings";


/**
 * GraphiosTs instance holding connection with one server entrypoint.
 * ____
 * GraphiosTs is dynamic GraphQl client build on top of Axios instance. All axios request settings are implemented in GraphiosTs settings.
 * For more information visit [GitHub](https://github.com/pavelstencl/GraphiosTs)
 */

export class GraphiosTs<T extends GraphTsSchema>{
    private settings:GraphiosTsSettings;
    /**
     * @param axios Instance of Axios. For more information visit [GitHub](https://github.com/axios/axios)
     * @param settings GraphiosTs settings
     */
    constructor(private axios:AxiosInstance,settings?:Partial<GraphiosTsSettings>){
        this.axios = axios;
        this.settings = {...{
            'axios':{},
            'contentType':'application/json',
            'refetch':0,
            'refetchPause':100
        },...settings};
        this.init();
    }
    private init(){
        //Register queue if exists
        if(this.settings.queue){
            this.settings.queue.register(this.req.bind(this));
        }
    }
    /**
     * Creates new GraphQL request object.
     * @param operation name of GraphQl operation type
     */
    public create<U extends keyof T>(operation:U,name?:string){
        return new GraphiosTsRequest<T[U],any>(name,operation,this.performRequest.bind(this));
    }
    /**
     * Callback method for GraphiosTsRequest class
     * @param req 
     */
    private performRequest(req:GraphiosTsRequest<any,any>){
        return new Promise((resolve,reject)=>{
            //If batch send it to Queue
            if(getSettings(req.settings,'batched') && this.settings.queue){
                this.settings.queue.add(req,resolve,reject);
            //Normal request
            }else{
                return this.req(
                    req.parse(),
                    req.operation,
                    resolve,reject,
                    req.settings
                );
            }
        });
    }
    private req(
        query:string,
        type:string | symbol | number,
        resolve:Resolve,
        reject:Reject,
        settings?:GraphiosTsRequestSettings
    ){
        //Get axios config
        let axiosConfig = {
            ...this.settings && this.settings.axios?this.settings.axios:{},
            ...settings && settings.axios?settings.axios:{}
        };
        //Header modification
        axiosConfig.headers = {
            ...axiosConfig.headers,
            ...{'Content-Type':this.settings.contentType}
        };
        //Payload
        axiosConfig.data = {
            [type]:query
        };
        //Call server
        this.axios.request(axiosConfig)
        //Response
        .then((response)=>{
            this.validateResponse(response.data,resolve,reject);
        })
        //Catch any error
        .catch((e:AxiosError)=>{
            //If refetch is allowed and possible, try again
            if( e.response && 
                e.response.status >= 500 && 
                this.settings.refetch && 
                this.settings.refetch >0
            ){
                this.refetch(axiosConfig,resolve,reject,this.settings.refetch || 0,e);
            }else{
                reject(new GraphiosTsNetworkError(
                    e.response?e.response.status.toString()||'01': '01',e
                ));
            }
        })
    }
    /**
     * Try to call server multiple times if server is unavailable
     * @param axiosConfig Configuration file of Axios request
     * @param resolve 
     * @param reject 
     * @param countdown Indicates how many times it can try to refetch
     * @param lastMessage Last response error message.
     */
    private refetch(
        axiosConfig:AxiosRequestConfig,
        resolve:Resolve,
        reject:Reject,
        countdown:number,
        lastMessage?:AxiosError
    ){
        //If all tries are left, throw an Error
        if(countdown === 0){
            if(lastMessage && lastMessage instanceof Error){
                reject(new GraphiosTsNetworkError(lastMessage.response?lastMessage.response.status.toString()||'01': '01',lastMessage));
            }else{
                reject(new GraphiosTsGenericNetworkError('Server is not responding'));
            }
        }
        //Delay of next request in ms.
        const delay = this.settings.refetchPause || 0;
        setTimeout(()=>{
            this.axios.request(axiosConfig).then((response)=>{
                this.validateResponse(response.data,resolve,reject);
            }).catch((e)=>{
                //If server is not responding properly
                if(e.response && e.response.status >= 500){
                    //Trigger another try
                    this.refetch(axiosConfig,resolve,reject,countdown-1,e);
                }else{
                    //Set number of tries to 0 -> evaluate error.
                    this.refetch(axiosConfig,resolve,reject,0,e);
                }
            });
        },delay);
    }
    /**
     * Validates incoming data, if it is GraphQl response, or if there are any GraphQl errors in it
     * @param data 
     * @param resolve 
     * @param reject 
     */
    private validateResponse(
        data:{data:any,errors:GraphQlError[]},
        resolve:Resolve,
        reject:Reject
    ){
        //Response is valid and without errors
        if(data && data.data && !data.errors){
            resolve(data.data);
        }
        //Response is valid and has errors in it
        else if(data && data.errors){
            reject(new GraphiosTsResponseError(data.data,data.errors));
        }
        //Response is invalid
        else{
            reject(
                new GraphiosTsDataError('Response does not contain any relevant data.')
            );
        }
    }
}