import { GraphiosTs } from './index';
import swapiSchema from '../.gql/swapi.graphql';
import Axios from 'axios';

const graphios = new GraphiosTs<swapiSchema>(Axios.create()).create('query','Film')
.request({
    'payload':{
        'id':true,
        'newCharacter':{
            __type:'alias',
            payload:{
                'characters':{
                    'payload':{
                        'homeworld':{
                            'payload':{
                                'bullshit':{
                                    __type:'alias',
                                    payload:{
                                        'gravity':true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}).then((data)=>{
    if(data.newCharacter[0].homeworld){
        data.newCharacter[0].homeworld.bullshit
    }
})