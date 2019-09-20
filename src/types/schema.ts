import { GraphiosTs } from "..";
import swapi from "../../.gql/swapi.graphql";
import Axios from "axios";
import { isFragment, getFragment } from "../utils/isFragment";

/**
 * GRAPHQL SCHEMA
 */


/**
 * Type is extended with its array
 */
type WithArray<T> = T extends any[]?T:T | T[];
/**
 * List of GraphQl scalars
 */
type Scalars = string | number | boolean | null | undefined;
type Check = true;

/**
 * TypeScript representation of GraphQl schema. Usualy contains query, mutation and subscription
 */
export type GraphTsSchema = {
    [key:string]:any;
};
/**
 * Payload definitions. Can be GraphTsObject or Scalars or array of Scalars
 */
export type GraphTsPayload = {[key:string]:GraphTsObject | WithArray<Scalars>};

/**
 * GraphTs object represents complete object with arguments and payload. It can be a special object as well.
 * Special object can be alias or fragment
 */
export type GraphTsObject = {
    args?:{[key:string]:any};
    payload:WithArray<GraphTsPayload|Scalars>;
    __type?:'fragment'|'alias'
}

export type ReduceArray<T> = T extends any[]? T[1] : T;

type RequestObject<T extends GraphTsObject> = {
    [K in keyof T]:K extends 'payload'?RequestPayload<ReduceArray<T['payload']>>:
    T[K]
};

export type RequestPayload<T extends GraphTsPayload|Scalars>= T extends GraphTsPayload?{
    //Typescript thinks it is an error, but it has to be an GraphTsObject
    //@ts-ignore
    [K in keyof T]?:NonNullable<T[K]> extends GraphTsObject ?RequestObject<T[K]>:Check;
}:Check;

type PickItem<K,S> = S extends {[key:string]:any}? K extends string? S[K]:never:never;
type Exist<K extends string | symbol | number,S> = S extends {[key:string]:any}?Extract<keyof S,K>:never;

type Alias<T extends {[key:string]:any},S> = T['__type'] extends string?{
    __type:'alias',
    payload:T['payload'] & S & Validate<T['payload'],S> & ({[K in keyof T['payload']]:T['payload'][K]['__type'] extends string? never:T['payload'][K]})
}:never;

export type Validate<T extends RequestPayload<any>,S extends RequestPayload<any>>={
    [K in keyof T]:Exist<K,S> extends never?Alias<T[K],S>:ValidateObject<T[K],PickItem<K,S>>;
};

type ValidateObject<T extends RequestObject<any>,S extends RequestObject<any> | WithArray<Scalars>>= S  extends RequestObject<any>?{
    payload:Validate<T['payload'],PickItem<'payload',S>>
}:S;

type isGraphTsObject<S>=S extends GraphTsObject[]?S[1]:S extends GraphTsObject?S:never;
type ConditionalArray<T,S> = S extends any[]?T[]:T;

export type ResultPayload<T extends RequestPayload<any>,S extends GraphTsPayload>= {
    [K in keyof T]:K extends string?
    S[K] extends WithArray<Scalars>?
    S[K]:
    isGraphTsObject<S[K]> extends never?ResultAlias<T[K],S>:
    isGraphTsObject<S[K]>['__type'] extends 'fragment'?ResultObject<T[K],isGraphTsObject<S[K]>> | '__fragment':
    ResultObject<T[K],isGraphTsObject<S[K]>>:
    never
}
type ResultAlias<T extends {[key:string]:any},S extends GraphTsPayload> = ResultObject<T['payload'][keyof Payload<T['payload']>],PickItem<keyof Payload<T['payload']>,S>>;
type Payload<T> = T extends {[key:string]:string}?{
    [K in keyof T['payload']]:T['payload'][K];
}:T
type isPayload<T>=T extends GraphTsPayload[]?T[1]:T extends GraphTsPayload?T:never;
type ResultObject<T extends RequestObject<any>,S extends GraphTsObject> = S extends GraphTsObject?ConditionalArray<ResultPayload<T['payload'],isPayload<S['payload']>>,S['payload']>:S['payload'];



/**
 * REST SCHEMA
 */

type RestObject = {[key:string]:{
    payload:any;
    args?:{[key:string]:any};
    vars?:{[key:string]:any};
    data?:any;
}}
export type RestSchema = {
    GET?:RestObject;
    POST?:RestObject;
    PUT?:RestObject;
    DELETE?:RestObject;
}

export type getPayload<T>= T extends {[key:string]:any}?T['payload'] extends undefined?never:T['payload']:never;

export type GraphTsSimplify<T> = T extends {[key:string]:any}?{
    [K in keyof T]:GraphTsSimplify<T[K]>
}:T;