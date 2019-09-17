import { GraphiosTs } from '../src';
import swapiSchema from '../.gql/swapi.graphql';
import Axios from 'axios';

//Create GraphiosTs instance. Put a GraphiosTs schema as an argument of TypeScript (here swapiSchema).
//Graphios requires Axios instance as argument. Settings are optional.
const gts = new GraphiosTs<swapiSchema>(Axios.create(),{
    //Turns on batching. It means it will collect all batchable request in a timeframe and sends them as one request
    batch:true,
    //Some additional settings
    axios:{
        baseURL:'wrongTestUrl'
    }
});

//This is request constructor. It requires name of operation (query, mutation, subscription)
const requestConstructor = gts.create('query');

//This is GraphQl composer, where you can put GraphQl command written in GraphiosTs command
const gql = requestConstructor.gql({
    //Declare Alias name.
    'SomeAlias':{
        /**
         * Alias type mark. Typescript hinting will not work, until you write __type:'alias'.
         * It is for security reasons, making sure, it is really what you want to do, and to distinguish from wrongly typed object.
         */
        __type:'alias',
        payload:{
            /**
             * Name of operation which alias represents.
             * IMPORTANT: GraphiosTs accepts only one item in this object, but it is not Type Checked.
             */
            'Film':{
                'payload':{
                    'episodeId':true,
                    'anotherAlias':{
                        __type:'alias',
                        payload:{
                            'director':true
                        }
                    }
                }
            }
        }
    }
});

//Request
gql.request().then((data)=>{
    //Response with alias names.
    console.log(data.SomeAlias.anotherAlias);
});