import { GraphTsPayload, RequestPayload, Validate } from "../types/schema";

export const GraphiosTsFragment = <S extends GraphTsPayload>()=><T>(data:T & RequestPayload<S> & Validate<T,RequestPayload<S>>)=>data as T;