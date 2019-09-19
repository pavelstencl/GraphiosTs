# GraphiosTs schema
GraphiosTs schema has simple, yet specific syntax, which is not similar to GraphQl schema. It consists of three main elements. GraphTsSchema, GraphTsObject and Scalars.
## Scalars
You know Scalars right? (boolean, string, number,...)
## GraphTsSchema
GraphTsSchema is the entry point to all operations. This schema is used in GraphiosTs as a TS variable. It has three main elements: query, mutation, and subscription. All those elements are optional. Each element contains a list of all available operations.

```typescript
//GraphTsSchema
export interface Schema{
    //Query element with GraphTsPayload of GraphQl operations
    query:{
        Film:FilmDefinition;
        //This operation does not require any Selection set or arguments. It returns string.
        RandomQuote:string;
        GetQuote:QuoteDefinition;
        Search:SearchDefinition;
        //More details about definitions below.
    }
}
```
## GraphTsObject
### Basic object
GraphTsObject represents field data in GraphQl. It holds payload and args elements, but the only payload is obligatory.

```typescript
//GraphTsObject common example
export type FilmDefinition = {
    //Represents GraphQl arguments.
    args?:{
        id:string;
    },
    //Payload represent GraphQl Selection set.
    payload:{
        //Scalar
        id:string;
        name:string;
        //List of scalars which is nullable. In response, you will have to check if it exists.
        actorList?:string[];
        //Another GraphTsObject
        characters?:{
            args?:{
                first:number;
            };
            payload:{
                id:string;
                name:string;
            }
        }
    }
}
/*
GraphQL Schema:
type FilmDefinition(id:String){
    id:ID!,
    name:String!,
    actorList:[string],
    characters(first:Int){
        id:ID!,
        name:String,
    }
}
*/
//GraphTsObject with siplified payload. This Definition requires some arguments and returns string.
export type QuoteDefinition = {
    args:{
        id:string;
    },
    payload:string;
}
/*
GraphQl Schema:
type QuoteDefinition(id:ID!):String
*/
```
### GraphQL Union or Interface object
In some cases (like search), you have multiple types of objects in one list. For that reason GraphQl has UNIONS and INTERFACES, which separates each object type into an inline fragment, so we can choose, what we want to buy for each object type. We can represent them with slightly modified GraphTsObject.

```typescript
export type SearchDefinition = {
    args:{
        q:string;
    };
    payload:{
        //Special GraphQL element. Helps to determine which type of object it is.
        __typename:string;
        //some other scalar, common for all inline fragments
        id:string;
        name:string;
        //Inline fragment definition. It uses special naming: __on<TYPE_NAME>:{...}
        __onFilm:{
            //Obligatory element, which tells script it is a fragment.
            __type:'fragment';
            //Payload for
            payload:{
                director:string;
            }
        }
    }
}
/*
interface SomeCommonInterface {
    id:ID!,
    name:String!
}
type Film implements SomeCommonInterface {
    director:String!
}
type SearchDefinition(q:String!):SomeCommonInterface;
*/
```
## Final thought
GraphTs Schema is simple yet powerful. With those three objects, you are able to define any GraphQl schema.