import { GraphiosTs } from './index';
import swapiSchema from '../.gql/swapi.graphql';
import Axios from 'axios';

const graphios = new GraphiosTs<swapiSchema>(Axios.create()).create('query','Film')
.request({
    'payload':{
        'id':true,
        'characters':{
            'payload':{
                'eyeColor':true
            }
        }
    }
}).then((data)=>{
    data.characters[0].eyeColor
})