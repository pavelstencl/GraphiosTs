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
     * Type of content
     */
    contentType?:'application/json' | string;
    /**
     * Axios settings. These settings will be merged with query settings and pased to the Axios. If axios has any default setting, this can override it.
     */
    axios?:AxiosRequestConfig
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

export type GraphTsQueue = {
    query:GraphiosTsRequest<any,any,any>[];
    mutation:GraphiosTsRequest<any,any,any>[];
    subscription:GraphiosTsRequest<any,any,any>[];
}