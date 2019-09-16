import { GraphiosTsSettings, GraphTsQueue, GraphiosTsRequestSettings, GraphQlError, GraphTsQueueItem, Resolve, Reject } from "./types";
import { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { GraphiosTsRequest } from "./graphiosTsRequest";
import { GraphTsSchema } from "./types/schema";
import { GraphiosTsParseError, GraphiosTsGenericError, GraphiosTsResponseError, GraphiosTsDataError, GraphiosTsNetworkError, GraphiosTsGenericNetworkError } from "./errors";


/**
 * GraphiosTs instance holding connection with one server entrypoint.
 * ____
 * GraphiosTs is dynamic GraphQl client build on top of Axios instance. All axios request settings are implemented in GraphiosTs settings.
 * For more information visit [GitHub](https://github.com/pavelstencl/GraphiosTs)
 */

export class GraphiosTs<T extends GraphTsSchema>{
    private queue:GraphTsQueue;
    private countdown:boolean;
    private settings:GraphiosTsSettings;
    /**
     * @param axios Instance of Axios. For more information visit [GitHub](https://github.com/axios/axios)
     * @param settings GraphiosTs settings
     */
    constructor(private axios:AxiosInstance,settings?:GraphiosTsSettings){
        this.axios = axios;
        this.settings = {...{
            'axios':{},
            'batch':false,
            'batchBuffer':5,
            'batchTimeout':10,
            'contentType':'application/json'
        },...settings};
        this.queue = {
            query:[],
            mutation:[],
            subscription:[]
        }
        this.countdown = false;
    }
    /**
     * Creates new request object.
     * @param operation name of GraphQl operation type
     */
    public create<U extends keyof T>(operation:U,name?:string){
        return new GraphiosTsRequest<T[U],any>(name,operation,this.manageRequestData.bind(this));
    }

    /*public createTpl<U extends keyof T,K extends keyof T[U]>(settings:{
        operation:U,
        operationName:string,
        action:K
    },){

    }*/
    /**
     * Callback method for GraphiosTsRequest class
     * @param req 
     */
    private manageRequestData(req:GraphiosTsRequest<any,any>){
        return new Promise((resolve,reject)=>{
            //If batch request is required.
            if( req.settings && 
                req.settings.batched === true && 
                this.settings.batch === true
            ){
                this.addToQueue(req,resolve,reject);
            //Normal request
            }else{
                return this.request(
                    req.parse(),
                    req.operation,
                    resolve,reject,
                    req.settings
                );
            }
        })
    }
    private request(
        query:string,
        type:string | symbol | number,
        resolve:Resolve,
        reject:Reject,
        settings?:GraphiosTsRequestSettings
    ){
        //Get axios config
        let axiosConfig = this.mergeSettings(settings);
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
    /**
     * Merges default settings with request settings. It merges axios only.
     */
    private mergeSettings(reqSet?:GraphiosTsRequestSettings){
        return {...this.settings && this.settings.axios?this.settings.axios:{},...reqSet && reqSet.axios?reqSet.axios:{}}
    }
    /**
     * Puts request into coresponding queue.
     * @param req Request
     * @param resolve Resolver
     * @param reject Rejector
     */
    private addToQueue(
        req:GraphiosTsRequest<any,any>,
        resolve:Resolve,
        reject:Reject
    ){
        if(['query','mutation'].includes(req.operation)){
            this.queue[req.operation].push({
                resolve:resolve,
                reject:reject,
                req:req
            });
        }else{
            throw new GraphiosTsParseError('01','Unknown GraphQl operation '+req.operation);
        }
        this.startCountdown();
    }
    /**
     * Opens a timeframe in which GraphiosTs is waiting for another request to be merged.
     */
    private startCountdown(){
        if(this.countdown !== true){
            this.countdown = true;
            setTimeout(()=>{
                this.processQueue('mutation');
            },this.settings.batchTimeout || 10)
        }
    }
    /**
     * Gets request from a queue, merges them and calls server
     * @param name 
     */
    private processQueue(name:keyof GraphTsQueue){
        //Clear countdown
        this.countdown = false;
        //Get n number of request from a queue
        const queue = this.getQueueItems(name,this.settings.batchBuffer || 5);
        if(queue.length !== 0){
            const reqField:string[] = [];
            const nameField:string[] = [];
            /**
             * Get data from all selected GraphTsRequests
             */
             //Get columns
            for (let column = 0; column < queue.length; column++) {
                const c = queue[column].req.parse(true);
                nameField.push(queue[column].req._name || 'UNKNOWN');
                //Get rows
                for (let row = 0; row < c.length; row++) {
                    const req = c[row];
                    let alias;
                    if(/^[a-zA-Z0-9_]+[:]{1}[a-zA-Z0-9_]+/.test(req)){
                        alias = ''
                    }else{
                        alias = req.match(/^[a-zA-Z0-9_]+/)+':';
                    }
                    reqField.push(`c${column}__r${row}__${alias}${req}`);
                }
            }
            //Create request string
            const query = `${name} ${'COMPOSITION__'+nameField.join('__')}{${reqField.join(',')}}`;
            //Call server
            new Promise((resolve,reject)=>{
                this.request(query,name,resolve,reject);
            }).then((data:{[key:string]:any})=>{
                if(typeof data === 'object' && data !== null){
                    const results:{[key:string]:any} = {};
                    for (const key in data) {
                        const field = key.match(/^c([0-9]+)__r([0-9]+)__(.*)/);
                        if(field){
                            results[field[1]] = {...results[field[1]],...{[field[3]]:data[key]}};
                        }
                    }
                    this.sendAllData(queue,results);
                }else{
                    this.sendAllReject(queue,new GraphiosTsDataError('It seems there are no available data.'));
                }
            }).catch((e:GraphiosTsGenericNetworkError | GraphiosTsNetworkError)=>{
                this.sendAllReject(queue,e);
            })
        }
        //Process next n requests or jump to another operation
        if(this.queue[name].length !== 0){
            this.processQueue(name);
        }else if(name === 'mutation'){
            this.processQueue('query');
        }
    }
    private sendAllReject(queue:GraphTsQueueItem[],e:any){
        for (let i = 0; i < queue.length; i++) {
            queue[i].reject(e);
        }
    }
    private sendAllData(queue:GraphTsQueueItem[],data:{[key:string]:any}){
        for (let i = 0; i < queue.length; i++) {
            if(data[i.toString()]){
                queue[i].resolve(data[i.toString()]);
            }else{
                queue[i].reject(new GraphiosTsDataError('It seems no data has been returned from batched request'));
            }
        }
    }
    private getQueueItems(name:keyof GraphTsQueue,amount:number){
        if(this.queue[name].length === 0){
            return [];
        }else{
            const out:GraphTsQueueItem[] = [];
            amount = this.queue[name].length >= amount?amount:this.queue[name].length;
            for (let i = 0; i < amount; i++) {
                const el = this.queue[name].shift();
                if(el){
                    out.push(el);
                }
            }
            return out;
        }
    }
}