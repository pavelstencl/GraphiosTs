import { GraphiosTs } from './index';
import swapiSchema from '../.gql/swapi.graphql';
import Axios from 'axios';
import {isFragment} from './utils/isFragment'

function payload(withDirector:boolean){
    return {
        id:true,
        director:withDirector
    }
}

const graphios = new GraphiosTs<swapiSchema>(Axios.create()).create('query','Film').request({
    'args':{
        'id':'foo',
        'title':'bar'
    },
    'payload':{
        'id':true,
        'dir':{
            __type:'alias',
            'payload':{
                'director':true
            }
        }
    }
}).then((data)=>{
    data.dir
})