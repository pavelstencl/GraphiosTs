import { GraphiosTsRequest } from "../graphiosTsRequest";
import { Resolve, Reject, GraphTsQueueItem } from "../types";

export function createQueueObject(req:GraphiosTsRequest<any,any>,resolve:Resolve,reject:Reject):GraphTsQueueItem{
    return {
        req:req,
        resolve:resolve,
        reject:reject
    }
}