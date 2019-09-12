import { AxiosRequestConfig } from "axios";
import { GraphiosTsRequest } from "../graphiosTsRequest";

export type GraphiosTsRequestSettings = {
    axios?:AxiosRequestConfig;
    batched?:boolean;
}

export type GraphiosTsSettings = {
    /**
     * Turns on batch requests. If it is off, grouped graphQl request is still possible, but it will not be merged with others.
     */
    batch?:boolean;
    /**
     * Maximum number, which can be batched in one request. Default is 5.
     */
    batchBuffer?:number;
    /**
     * Timeframe when Graphios will wait if another requests will not occure in a queue. 10ms is default value.
     */
    batchTimeout?:number;
    /**
     * Type of content
     */
    contentType?:'application/json' | string;
    /**
     * Axios settings. These settings will be merged with query settings and pased to the Axios. If axios has any default setting, this can override it.
     */
    axios?:AxiosRequestConfig;
    /**
     * If server returns status >= 500, it will try again.
     * This specifies how many times should it try. If 0, it will not refetch at all.
     */
    refetch?:number;
    /**
     * Pause in ms before another refetch try.
     */
    refetchPause?:number;
}

export type Str<T> = T extends string?T:string;

export type GraphQlError = {
    locations:{
        line:number;
        column:number;
    }[],
    path:any[],
    message:string,
    extensions?:{[key:string]:any}
    [key:string]:any
}

export type GraphTsQueueItem = {
    resolve:(val:any)=>any;
    reject:(val:any)=>any;
    req:GraphiosTsRequest<any,any>
}
export type GraphTsQueue = {
    query:GraphTsQueueItem[];
    mutation:GraphTsQueueItem[];
    subscription:GraphTsQueueItem[];
}