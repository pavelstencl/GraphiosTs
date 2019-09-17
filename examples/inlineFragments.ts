import { GraphiosTs, isFragment, getFragment } from '../src';
import swapiSchema from '../.gql/swapi.graphql';
import Axios from 'axios';

//Create GraphiosTs instance. Put a GraphiosTs schema as an argument of TypeScript (here swapiSchema).
//Graphios requires Axios instance as argument. Settings are optional.
const gts = new GraphiosTs<swapiSchema>(Axios.create(),{
    batch:true,
    axios:{
        baseURL:'wrongTestUrl'
    }
}).create('query').gql({
    'node':{
        'args':{
            'id':'Foo'
        },
        'payload':{
            /**
             * GraphQl reseved name. Returns string with name of Object Type.
             * For Inline Fragments in GraphiosTs it is required to include this field into request, so Fragments can be type hinted.
             */
            '__typename':true,
            /**
             * Fragment definiton. Requires __type:'fragment'
             */
            '__onFilm':{
                __type:'fragment',
                payload:{
                    'director':true,
                }
            },
            //Another fragment
            '__onPerson':{
                __type:'fragment',
                payload:{
                    'eyeColor':true,
                }
            },
            //Data common for both of them
            'id':true
        }
    }
}).request().then((data)=>{
    //Write common data
    console.log(data.node.id);
    /**
     * Helper function to determine if current object is Film fragment
     */
    if(isFragment(data.node,'__onFilm')){
        /**
         * Now data.node are typehinted with fragment extension. But there are still present fake fragment object
         * like __onFilm. You can ignore them, or if you want proper type safe definition, use
         * `getFragment`, which will transform object to Type Safe definition.
         */
        const film = getFragment(data.node);
        console.log(film.director);

        /**
         * This is example of unfiltered __onFilm fragment.
         * This can lead to unexpected behavior. So please use always `getFragment` method
         */
        console.log(data.node.__onFilm);
    }
});