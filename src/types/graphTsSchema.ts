/**
 * Type definitions of Typescripted GraphQl schema.
 */


/**
 * Basic list of GraphQl operations.
 */
export type GraphTsOperationsList = {
    query?:ToObject<GraphTsSchema>;
    mutation?:ToObject<GraphTsSchema>;
    subscription?:ToObject<GraphTsSchema>;
}

/**
 * List of GraphQl scalars translated to Typescript
 */
type Scalars = string | number | boolean | null;

/**
 * GraphTsObject is a core element of whole GraphiosTs. Contains all available informations about specific part of GraphQl code.
 * ____
 * * `payload` represents GraphQl selection set. It can contain field without aliases and directives or Scalars.
 * * `args` are GraphQl arguments.
 * * `__type` is GraphiosTs reserved variable. Indicates special behavior of the object.
 * * `__type.fragment` indicates object is an inline fragment and should be compiled in this way.
 * * `__type.alias` is alias for selected payload. IMPORTANT: Only first element in payload is used as an alias. Others are ignored.
 */
type GraphTsObject = {
    payload?:WithArray<{[key:string]:any} | Scalars>;
    args?:{[key:string]:any};
    __type?:'fragment' | 'alias'
}
/**
 * Defines schema (or part of it). It can be GraphTsObject or Scalars or Listed Scalars.
 */
export type GraphTsSchema = GraphTsObject | WithArray<Scalars>;

/**
 * Compiles TypeScript schema into GraphTs request schema. All flat values (or their List) are converted into booleans.
 * All GraphTsObjects are kept, but inner flat values are transformed again
 */
export type GraphTsRequest<T extends GraphTsSchema> = T extends GraphTsObject?{
    //It is GraphTsObject type.
    [K in keyof T]:K extends 'payload'?RequestParser<T,K>:T[K]
//It is flat value or List
}:boolean;

/**
 * Reduces TypeScript schema to request elements
 */
type RequestParser<T,K extends keyof T> = ReduceArray<T[K]> extends {[key:string]:any}?{
    //Is Scalar or undefined
    [U in keyof ReduceArray<T[K]>]?: ReduceArray<T[K]>[U] extends WithArray<Scalars | undefined>?boolean:
    //Is GraphTs object
    Exclude<GraphTsRequest<ReduceArray<T[K]>[U]>,boolean>
}:boolean

/**
 * Alias type definition
 */
type Alias<D extends any,S extends GraphTsSchema> = {
    /**
     * `__type` GraphiosTs reserved variable. Indicates special behavior of the object.
    */
    __type:'alias'
    payload:GraphTsInputValidation<D & S,S,true>
};

/**
 * Compares written input with provided schema and guards inacuracy or outdated GraphQl elements
 */
export type GraphTsInputValidation<D extends any,S extends GraphTsSchema,E extends boolean> = S extends {[key:string]:any}?{
    [K in keyof D]:
        K extends 'args'?Required<S>[K]:
        K extends '__type'?D[K]:
        K extends string?
            D[K] extends {[key:string]:any}?
                Required<S>[K] extends {[key:string]:any}?
                GraphTsInputValidation<D[K],Required<S>[K],false>:
                TypeExist<S,K> extends never?E extends false?Alias<D[K]['payload'],S>:never:
                never:
            TypeExist<S,K> extends never?never:D[K]:
            never;
}:S

/**
 * Filters all items in selection set from schema. Takes request payload as a source.
 */

type AliasItem<T,S> = PickFromObject<S,Exclude<[keyof T][0],'__type'>>;
type AliasResult<T extends GraphTsObject,S> = Define<AliasItem<T['payload'],S>> extends GraphTsSchema?ConditionalOptional<AliasItem<T['payload'],S>,GraphTsResponse<AliasItem<T['payload'],T['payload']>,Define<AliasItem<T['payload'],S>>>>:never;


export type GraphTsResponse<T extends GraphTsObject,S extends GraphTsSchema> = S extends GraphTsObject?GraphTsResult<T['payload'],S['payload']>:S;
export type GraphTsResult<T extends GraphTsObject['payload'],S extends GraphTsObject['payload']> = S extends {[key:string]:any}?
T extends {[key:string]:never}?never:
ConditionalArray<{
    [K in keyof T]:
        T[K] extends boolean?ConditionalOptional<PickFromObject<ReduceArray<S>,K>,Define<PickFromObject<ReduceArray<S>,K>>>:
        T[K] extends {__type:'fragment',payload?:any,args?:any}?ConditionalOptional<PickFromObject<ReduceArray<S>,K>,GraphTsResponse<ReduceArray<T>[K],Define<PickFromObject<ReduceArray<S>,K>>>>|void:
        T[K] extends GraphTsSchema?ConditionalOptional<PickFromObject<ReduceArray<S>,K>,GraphTsResponse<ReduceArray<T>[K],Define<PickFromObject<ReduceArray<S>,K>>>>:
        AliasResult<T[K],ReduceArray<S>>
},S>:S;
/*
export type GraphTsResponse<T extends GraphTsObject,S extends GraphTsSchema> = S extends GraphTsObject?GraphTsResult<T['payload'],S['payload']>:S;
export type GraphTsResult<T extends GraphTsObject['payload'],S extends GraphTsObject['payload']> = S extends {[key:string]:any}?ConditionalArray<{
    [K in keyof T]:
        T[K] extends boolean?ConditionalOptional<PickFromObject<ReduceArray<S>,K>,Define<PickFromObject<ReduceArray<S>,K>>>:
        T[K] extends {__type:'fragment',payload?:any,args?:any}?ConditionalOptional<PickFromObject<ReduceArray<S>,K>,GraphTsResponse<ReduceArray<T>[K],Define<PickFromObject<ReduceArray<S>,K>>>>|void:
        T[K] extends GraphTsSchema?ConditionalOptional<PickFromObject<ReduceArray<S>,K>,GraphTsResponse<ReduceArray<T>[K],Define<PickFromObject<ReduceArray<S>,K>>>>:
        never
},S>:S;
*/


/**
 * HELPERS
 */
/**
 * If type is an array, it will remove it.
 */
type ReduceArray<A> = A extends any[]?A[1]:A;
/**
 * It will add an array. If type is already the array. It will create multi-array.
 */
type WithArray<T> = T | T[];
/**
 * Detects if name of type is defined in a GraphTs schema.
 */
type TypeExist <S extends{[key:string]:any},K extends string>=Extract<keyof S,K>;

/**
 * Selects one item from object based on a key. 
 */
type PickFromObject<T extends {[key:string]:any},K extends string | number | symbol> = K extends string ?T[K]:never;
/**
 * Changes optional parameter to required.
 */
type Define<T> = Exclude<T,undefined>;
/**
 * If first value is optional, make second value optional as well.
 */
type ConditionalOptional<T,S> = T extends undefined? S|undefined:S;
/**
 * If first value is an array, transform second value to array as well.
 * If second type is already an array, it will make a multi-array.
 */
type ConditionalArray<T extends any,F extends any> = F extends any[]?T[]:T;
/**
 * Makes an object
 */
type ToObject<T> = {[key:string]:T}