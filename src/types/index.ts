import { AxiosRequestConfig } from "axios";

export type GraphiosTsRequestSettings = {
    axios:AxiosRequestConfig
}

export type GraphiosTsSettings = {
    /**
     * Turns on batch requests. If it is off, grouped graphQl request is still possible, but it will not be merged with others.
     */
    batch:boolean;
    /**
     * Maximum number, which can be batched in one request. Default is 5.
     */
    batchBuffer:number;
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