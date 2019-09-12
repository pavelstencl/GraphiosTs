import { GraphiosTsSettings, GraphTsQueue, GraphiosTsRequestSettings, GraphQlError, GraphTsQueueItem } from "./types";
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
        return new GraphiosTsRequest<T[U],any>(name,operation,this.__req.bind(this));
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
    private __req(req){
        if(req instanceof GraphiosTsRequest){
            return new Promise((resolve,reject)=>{
                if(req.settings && req.settings.batched === true && this.settings.batch === true){
                    this.addToQueue(req,resolve,reject);
                }else{
                    return this.request(req.parse(),req.operation,resolve,reject,req.settings);
                }
            })
        }else{
            throw new GraphiosTsGenericError('01',`Private method __req in GraphiosTs class expects GraphiosTsRequest instance as an argument.${typeof req} delivered instead.`);
        }
    }
    private request(query:string,type:string | symbol | number,resolve,reject,settings?:GraphiosTsRequestSettings){
        let axiosConfig = this.mergeSettings(settings);
        axiosConfig.headers = {...axiosConfig.headers,...{'Content-Type':this.settings.contentType}};
        axiosConfig.data = {[type]:query};
        this.axios.request(axiosConfig).then((response)=>{
            this.validateResponse(response.data,resolve,reject);
        }).catch((e:AxiosError)=>{
            if(e.response && e.response.status >= 500 && this.settings.refetch && this.settings.refetch >0){
                this.refetch(axiosConfig,resolve,reject,this.settings.refetch || 0,e);
            }else{
                reject(new GraphiosTsNetworkError(e.response?e.response.status.toString()||'01': '01',e));
            }
        })
    }
    private refetch(axiosConfig:AxiosRequestConfig,resolve,reject,countdown:number,lastMessage?:AxiosError){
        if(countdown === 0){
            if(lastMessage && lastMessage instanceof Error){
                reject(new GraphiosTsNetworkError(lastMessage.response?lastMessage.response.status.toString()||'01': '01',lastMessage));
            }else{
                reject(new GraphiosTsGenericNetworkError('Server is not responding'));
            }
        }
        let wait = 0;
        if(this.settings.refetchPause){
            wait = this.settings.refetchPause;
        }
        setTimeout(()=>{
            this.axios.request(axiosConfig).then((response)=>{
                this.validateResponse(response.data,resolve,reject);
            }).catch((e)=>{
                if(e.response && e.response.status >= 500){
                    this.refetch(axiosConfig,resolve,reject,countdown-1,e);
                }else{
                    this.refetch(axiosConfig,resolve,reject,0,e);
                }
            });
        },wait);
    }
    private validateResponse(data:{data:any,errors:GraphQlError[]},resolve:(data:any)=>any,reject:(error:Error)=>any){
        if(data && data.data && !data.errors){
            resolve(data.data);
        }else if(data && data.errors){
                reject(new GraphiosTsResponseError(data.data,data.errors));
        }else{
            reject(new GraphiosTsDataError('Response does not contain any relevant data.'));
        }
    }
    private mergeSettings(reqSet?:GraphiosTsRequestSettings){
        return {...this.settings && this.settings.axios?this.settings.axios:{},...reqSet && reqSet.axios?reqSet.axios:{}}
    }
    private addToQueue(req:GraphiosTsRequest<any,any>,resolve,reject){
        switch(req.operation){
            case 'query':
                this.queue.query.push({
                    resolve:resolve,
                    reject:reject,
                    req:req
                });
            break;
            case 'mutation':
                this.queue.mutation.push({
                    resolve:resolve,
                    reject:reject,
                    req:req
                });
            break;
            default:
                throw new GraphiosTsParseError('01','Unknown GraphQl operation '+req.operation);
        }
        this.startCountdown();
    }
    private startCountdown(){
        if(this.countdown !== true){
            this.countdown = true;
            setTimeout(()=>{
                this.processQueue('mutation');
            },this.getSettings('batchTimeout')||10)
        }
    }

    private getSettings<T extends keyof GraphiosTsSettings>(name:T):GraphiosTsSettings[T] | undefined{
        if(this.settings){
            return this.settings[name];
        }
        return undefined;
    }

    private processQueue(name:keyof GraphTsQueue){
        this.countdown = false;
        const queue = this.getQueueItems(name,this.getSettings('batchBuffer') || 5);
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
            }).then((data)=>{
                if(typeof data === 'object' && data !== null){
                    const results = {};
                    for (const key in data) {
                        const field = key.match(/^c([0-9]+)__r([0-9]+)__(.*)/);
                        if(field){
                            results[field[1]] = {...results[field[1]],...{[field[3]]:data[key]}}
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