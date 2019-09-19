import { GraphTsQueue, Resolve, Reject, GraphTsQueueItem, DirectGraphiosTsRequest } from "./types";
import { GraphiosTsRequest } from "./graphiosTsRequest";
import { createQueueObject } from "./utils/createQueueObject";
import { GraphiosTsGenericError, GraphiosTsGenericNetworkError, GraphiosTsNetworkError, GraphiosTsDataError } from "./errors";

type GraphiosTsQueueSettings = {
    timeframe?:number;
    pause?:number;
    maxSize?:number;
}
export class GraphiosTsQueue{
    queue:GraphTsQueue;
    settings:GraphiosTsQueueSettings;
    isProcessing:boolean;
    gtsCallback:DirectGraphiosTsRequest;
    constructor(settings?:GraphiosTsQueueSettings){
        this.queue = {
            query:[],
            mutation:[]
        };
        this.settings = {...{
            timeframe:10,
            pause:50,
            maxSize:10
        },...settings};
        this.isProcessing = false;
    }
    public register(graphios:DirectGraphiosTsRequest){
        this.gtsCallback = graphios;
    }
    public add(req:GraphiosTsRequest<any,any>,resolve:Resolve,reject:Reject){
        const queueObj = createQueueObject(req,resolve,reject);
        switch(req.operation){
            case 'query':
                this.queue.query.push(queueObj);
            break;
            case 'mutation':
                this.queue.mutation.push(queueObj);
            break;
            default:
                throw new GraphiosTsGenericError('07','Subscription cannot be batched.');
        }
        this.startProcess();
    }
    private startProcess(){
        if(this.isProcessing === false){
            this.isProcessing = true;
            setTimeout(this.processQueue.bind(this),this.settings.timeframe);
        }
    }
    private processQueue(type?:keyof GraphTsQueue){
        const t = type || 'mutation';
        const queue = this._getQueueItems(t);
        if(queue.length !== 0){
            const gql = this.generateGraphQl(queue,t);
            new Promise((rs,rj)=>{
                this.gtsCallback(gql,t,rs,rj);
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
        if(this.queue[t].length !== 0){
            this.processQueue(t);
        }else if(t === 'mutation'){
            this.processQueue('query');
        }
    }
    private generateGraphQl(queue:GraphTsQueueItem[],name:string):string{
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
        return `${name} ${'COMPOSITION__'+nameField.join('__')}{${reqField.join(',')}}`;
    }
    private _getQueueItems(type:keyof GraphTsQueue):GraphTsQueueItem[]{
        const out:GraphTsQueueItem[] = [];
        let item:GraphTsQueueItem | undefined;
        while(this.queue[type].length !== 0 && out.length !== this.settings.maxSize){
            item = this.queue[type].shift();
            if(item){
                out.push(item);
            }
        }
        return out;
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
}