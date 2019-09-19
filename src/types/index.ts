import { AxiosRequestConfig } from "axios";
import { GraphiosTsRequest } from "../graphiosTsRequest";
import { GraphiosTsQueue } from "../graphiosTsQueue";

export type GraphiosTsRequestSettings = {
    axios?:AxiosRequestConfig;
    batched?:boolean;
}

export interface GraphiosTsRestSettings{
    /**
     * Axios settings. These settings will be merged with query settings and pased to the Axios. If axios has any default setting, this can override it.
     */
    axios:AxiosRequestConfig;
    /**
     * If server returns status >= 500, it will try again.
     * This specifies how many times should it try. If 0, it will not refetch at all.
     */
    refetch:number;
    /**
     * Pause in ms before another refetch try.
     */
    refetchPause:number;
}

export interface GraphiosTsSettings extends GraphiosTsRestSettings{
    /**
     * Type of content
     */
    contentType:'application/json' | string;
    /**
     * Batch queue object
     */
    queue?:GraphiosTsQueue;
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
}

export type Resolve = (value?:any)=>any;
export type Reject = (reason?:any)=>any;

export type GraphiosTsCallback = (req:GraphiosTsRequest<any,any>)=>any;

export type DirectGraphiosTsRequest = (
    query:string,
    type:string | symbol | number,
    resolve:Resolve,
    reject:Reject
)=>void;