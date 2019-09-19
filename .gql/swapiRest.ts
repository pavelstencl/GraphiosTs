import {RestSchema, ResultPayload, RequestPayload} from '../src/types/schema';
import {swapi} from './swapi.graphql';
export interface SwapiRest extends RestSchema{
    GET:{
        '/film/:id/':{
            payload:{
                id:string,
                name:string
            },
            vars?:{
                id?:string,
                false?:string
            },
            data?:{
                name:string
            },
            args?:{
                sort:string
            }
        }
    }
}