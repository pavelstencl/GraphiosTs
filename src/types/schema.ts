import swapiGraphiosTs from "../../.gql/swapi.graphql";
import { GraphiosTs } from "..";
import Axios from "axios";

class FakeFrag{};
type WithArray<T> = T extends any[]?T:T | T[];

type Scalars = string | number | boolean | null | undefined;

type Check = true;

export type GraphTsSchema = {
    [key:string]:any;
};
export type GraphTsPayload = {[key:string]:GraphTsObject | WithArray<Scalars>};

export type GraphTsObject = {
    args?:{[key:string]:any};
    payload:WithArray<GraphTsPayload|Scalars>;
    __type?:'fragment'|'alias'
}

type ReduceArray<T> = T extends any[]? T[1] : T;

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
    /**Scalars*/S[K]:
    /**Alias*/isGraphTsObject<S[K]> extends never?ResultAlias<T[K],S>:
    /**Object*/isGraphTsObject<S[K]>['__type'] extends 'fragment'?ResultObject<T[K],isGraphTsObject<S[K]>> | void:
    ResultObject<T[K],isGraphTsObject<S[K]>>:
    never
}
type ResultAlias<T extends {[key:string]:any},S extends GraphTsPayload> = ResultObject<T['payload'][keyof Payload<T['payload']>],PickItem<keyof Payload<T['payload']>,S>>;
type Payload<T> = T extends {[key:string]:string}?{
    [K in keyof T['payload']]:T['payload'][K];
}:T
type isPayload<T>=T extends GraphTsPayload[]?T[1]:T extends GraphTsPayload?T:never;
type ResultObject<T extends RequestObject<any>,S extends GraphTsObject> = S extends GraphTsObject?ConditionalArray<ResultPayload<T['payload'],isPayload<S['payload']>>,S['payload']>:S['payload'];