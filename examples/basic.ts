import { GraphiosTs } from '../src';
import swapiSchema from '../.gql/swapi.graphql';
import Axios from 'axios';

//Create GraphiosTs instance. Put a GraphiosTs schema as an argument of TypeScript (here swapiSchema).
//Graphios requires Axios instance as argument. Settings are optional.
const gts = new GraphiosTs<swapiSchema>(Axios.create(),{
    batch:true,
    axios:{
        baseURL:'wrongTestUrl'
    }
});

//This is request constructor. It requires name of operation (query, mutation, subscription)
const requestConstructor = gts.create('query');

//This is GraphQl composer, where you can put GraphQl command written in GraphiosTs command
const gql = requestConstructor.gql({
    //Name of query operation you want to call
    'Film':{
        //Arguments of operation. If schema requires arguments, Typescript will require it as well
        'args':{
            'id':'1',
            'title':'Foo'
        },
        //Payload represents Selection set in GraphQl
        'payload':{
            //Scalars are picked by `true` value
            'id':true,
            //Example of inner Field
            'characters':{
                //Has it's own arguments (in this case optional)
                'args':{
                    'first':2
                },
                //Another Selection set
                'payload':{
                    'gender':true
                }
            }
        }
    }
});

//Request
gql.request().then((data)=>{
    //Response
    console.log(data.Film.characters[0].gender);
});
