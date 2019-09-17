[![Logo](media/logo.png "Logo")](#graphiosts)

# GraphiosTs
[![npm version](https://badgen.net/npm/v/graphios-ts)](https://www.npmjs.com/package/graphios-ts)
[![Build Status](https://travis-ci.org/pavelstencl/GraphiosTs.svg?branch=master)](https://travis-ci.org/pavelstencl/GraphiosTs)
[![gzip size](https://badgen.net/bundlephobia/minzip/graphios-ts)](https://bundlephobia.com/result?p=graphios-ts)
[![Coverage Status](https://coveralls.io/repos/github/pavelstencl/GraphiosTs/badge.svg?branch=master)](https://coveralls.io/github/pavelstencl/GraphiosTs?branch=master)

GraphiosTs is TypeScript based GraphQl client built as an extension of Axios package. It combines the best from Axios and Typescript to provide lightweight alternative to the Apollo-client. GraphiosTs uses one GraphQl schema source to provide strongly typed requests and responses. In other words: **You will get,what you typed**. [Try interactive demo.](https://codesandbox.io/s/silly-wind-gk1fp);

[![Typings example](media/preview.gif "Typings example")](#features)

## Motivation

In the real world of programming, most of APIs combine GraphQL and REST requests, so you need two separate clients. It puts complexity to handle two clients with similar settings and it is increasing bundle size. With GraphiosTs, you can share this logic with Axios via settings and interceptors. You have one client for both REST and GraphQl requests.

GraphiosTs translates GraphQl schema into GraphiosTs (TypeScript) schema. This schema is used for validation of GraphQL commands and compilation of result based on a command you write. Since GraphiosTs schema holds whole GraphQl logic of your endpoint, there is no need to run compilation every time, some GraphQl command has been changed in a script. With **[GraphiosTs-Cmd](https://github.com/pavelstencl/graphiosts-cmd)** (downloads schema and translates it to GraphiosTs schema) you have only one source of truth... The server one. Every time GraphQl schema on the server will change, you can update GraphiosTs schema via command and Typescript will show you if something is wrong or incompatible.

This package does not try to compete with the Apollo ecosystem. Our main goal was to build simple, lightweight strongly typed graphql client, which can be used in APIs, where every byte of bundle size counts. If you want full-featured GraphQl client with tons of extensions and you don't care about size, take [Apollo-client](https://github.com/apollographql/apollo-client), which provides TypeScript definitions for results as well.


## Features
- **GraphQl client with features below**
    - [Support of query and mutation operation (Subscriptions will be added in next version)](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Operations)
    - [Selection sets](https://graphql.github.io/graphql-spec/June2018/#sec-Selection-Sets)
    - [Fields](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Fields)
    - [Arguments with Input values](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Arguments)
    - [Field Aliases](https://graphql.github.io/graphql-spec/June2018/#sec-Field-Alias)
    - [Inline fragments](https://graphql.github.io/graphql-spec/June2018/#sec-Inline-Fragments)
- **Axios**
    - [Use all axios features which you love](https://github.com/axios/axios).
- **Typings**
    - Typesafe request and response with hints.
    - Uses only one schema -> the single source of the truth.
    - Conditional types with inline fragments.
- **Advanced features**
    - Supports batched requests (multiple requests merged into one).
    - Automated schema updates from a server via [GraphiosTs-Cmd](https://github.com/pavelstencl/graphiosts-cmd).

## Pitfalls
- GraphiosTs is driven with TypeScript linter, which has its limitations and some features of GraphQl are difficult to define as typesafe. **Currently GraphiosTs does not support Directives and Variables. But this can be resolved with pure JavaScript functions since the request is plain JSON object.**. 
- GraphiosTs does not support Subscriptions yet. We are planning to implement it in the near feature.
### TypeScript
- Inline Fragments are working properly, but when you use `isFragment` helper method, fake fragment definitions are still present. Those definitions are typesafe, so they never occur, but for readability of definition, you have to use `getFragment` helper method to get really typesafe definition.


## Instalation

**This package is TypeScript ONLY**. Without TypeScript this package does not make much sense.

### Package
Using NPM:
```
npm install --save graphios-ts
```

## Interactive example
Basic request example.
[Swapi on Codesandbox](https://codesandbox.io/s/silly-wind-gk1fp);

## Example
Performing simple request
```typescript
import { GraphiosTs, isFragment , getFragment } from 'graphios-ts';
import { swapiSchema } from './swapi.graphQl';
import Axios from 'axios';


const gql = new GraphiosTs<swapiSchema>(Axios.create())
//Create new query
.create('query','OptionalName')
//GraphQl definition in GraphiosTs commands
.gql({
    //Name of query operation as a Field object
    'Film':{
        //It accepts arguments
        'args':{
            'id':'Foo',
            'title':'Bar'
        }
        //Payload is GraphQl Selection set.
        'payload':{
            //Scalars are defined by `true` value
            'id':true,
            //Field object without arguments
            'characters':{
                'payload':{
                    'id':true
                }
            },
            //Aliased value
            'alias':{
                '__type':'alias',
                'payload':{
                    'director':true
                }
            }
        }
    },
    'node':{
        'args':{
            'id':'Bar'
        },
        'payload':{
            'id':true,
            '__typename':true,
            //Fragment
            '__onFilm':{
                '__type':'fragment',
                'payload':{
                    'director':true
                }
            }
        }
    }
})
/**
 * GraphiosTs will translate it into this Gql:
 * query OptionalName{
 *      Film(id:"Foo",title:"Bar"){
 *          id,
 *          characters{
 *              id
 *          },
 *          MovieMaker:director
 *      },
 *      node(id:"Bar"){
 *          id,
 *          __typename,
 *          ...on Film{
 *              director
 *          }
 *      }
 * }
 */
.request().then((data)=>{
    //Type safe data response
    console.log(data.Film.characters[0].id);
    //Type safe alias
    console.log(data.Film.MovieMaker)
    //Fragments
    //Helper method for selecting fragment
    if(isFragment(data.node,'__onFilm')){
        //Helper method for Type safe fragment definition
        const film = getFragment(data.node);
        //Type safed object.
        console.log(film.director);
    }
});
```

More examples [here](https://github.com/pavelstencl/GraphiosTs/tree/master/examples)

## Schema

**GraphiosTs uses *[GraphiosTs-Cmd](https://github.com/pavelstencl/graphiosts-cmd)* package, which is command-line utility for conversion of serverside GraphQl schema to GraphiosTs schema. It keeps the source of truth on the server-side, so maintaining of GraphQl requests is significantly easier. Schema can be handwritten as well, but we discourage you from this approach, since maintaining of this schema is extremely difficult. You can inspect [swapi schema]( https://github.com/pavelstencl/GraphiosTs/blob/master/.gql/swapi.graphql.ts) to learn about Schema composition**

## GraphiosTs API

Creation of new GraphiosTs instance
```typescript
import {GraphiosTs} from 'graphios-ts';
import Axios from 'axios';
import schemaDefinition from 'path to schema'
const gts = new GraphiosTs<schemaDefinition>(
    Axios.create(), //Any Axios instance.
    {...} // Optional settings. Description below
);
```

### GraphiosTs settings
```typescript
{
    /**
     * Turns on/off batch request.
     * Batch request groups multiple requests into one.
     * Then result is sorted and send to separate Promise resolvers.
     * Default is false
     */
    batch?:boolean;
    /**
     * Batch buffer size. Sets maximum amount of request per iteration
     */
    batchBuffer?:number;
    /**
     * Timeframe in which GraphiosTs waits for other requests
     */
    batchTimeout?:number;
    /**
     * Type of content
     */
    contentType?:'application/json' | string;
    /**
     * Axios settings. These settings will be merged with query settings and pased to the Axios. 
     * If axios has any default setting, this can override it.
     * Useful when GraphiosTs inherits Axios instance with REST settings and needs to override some rules
     */
    axios?:AxiosRequestConfig;
    /**
     * If server returns status >= 500, it will try again.
     * This specifies how many times should it try. If 0, it will not refetch at all.
     * Default is 0.
     */
    refetch?:number;
    /**
     * Pause in ms before next try.
     */
    refetchPause?:number;
}
```

### GraphiosTs instance methods
```typescript
/**
 * GraphiosTs instances is responsible for creation of Requests and handling responses. 
 */
//Creates new GraphiosTsRequest instance.
//See GraphiosTsRequest description below
const request = gts.create('query' | 'mutation');
```

### GraphiosTsRequest
GraphiosTsRequest is request class instance created by GraphiosTs. It hold all logic to define GraphQl operation. Each instance can perform only one operation at time (query or mutation).

#### GraphiosTsRequest Instance methods
```typescript
//Gql command composer. Defines GraphQl command. Uses GraphiosTs payload composition ( Details below )
request.gql(payloadDefinition);
//Returns GraphQl command as a string
request.parse();
//Sends data to a server. Can be sent only once. Then use refetch method instead
request.request(requestSettings);
//Sends same request again. Cannot be called before request method is called.
request.refetch();
```

#### GraphiosTsRequest request settings
```typescript
{
    //Axios request config 
    axios?:AxiosRequestConfig;
    //If true, request will be added to batch queue and merged with other requests.
    batched?:boolean;
}
```