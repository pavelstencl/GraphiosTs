import { GraphiosTs } from ".."
import Axios from "axios"
import swapiGraphiosTs from "../../.gql/swapi.graphql";


let gTs = new GraphiosTs<swapiGraphiosTs>(Axios.create());
describe('GraphQL request compiling tests',()=>{
    it('should compile simle request',()=>{
        const res = gTs.create('query','Film').gql({
            'args':{
                'id':'cj0nxmy3fga5s01148gf8iy3c',
                'title':'A New Hope'
            },
            'payload':{
                'id':true,
                'characters':{
                    'payload':{
                        'eyeColor':true
                    }
                }
            }
        }).parse();
        expect(res).toBe('query{Film(id:"cj0nxmy3fga5s01148gf8iy3c",title:"A New Hope"){id,characters{eyeColor}}}');
    });
    it('compiles aliased query',()=>{
        const res = gTs.create('query','allFilms').gql({
            'payload':{
                'test':{
                    __type:'alias',
                    'payload':{
                        'characters':{
                            'args':{
                                'first':2
                            },
                            'payload':{
                                'gen':{
                                    '__type':'alias',
                                    'payload':{
                                        'gender':true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }).parse();
        expect(res).toBe('query{allFilms{test:characters(first:2){gen:gender}}}');
    });
    it('compiles fragmented query',()=>{
        const res = gTs.create('query','node').gql({
            'args':{
                'id':'cj0nxmy3fga5s01148gf8iy3c'
            },
            'payload':{
                '__typename':true,
                '__onFilm':{
                    '__type':'fragment',
                    'payload':{
                        'id':true,
                        'characters':{
                            'args':{
                                'last':2
                            },
                            'payload':{
                                'gender':true
                            }
                        }
                    }
                }
            }
        }).parse();
        expect(res).toBe('query{node(id:"cj0nxmy3fga5s01148gf8iy3c"){__typename,...on Film{id,characters(last:2){gender}}}}');
    });
    it('escapes dangerous strings',()=>{
        const res = gTs.create('query','Film').gql({
            'args':{
                'id':'123',
                'title':`{"foo":["\n","\\","{\"zig\":\"giz\"}"]}`
            },
            'payload':true
        }).parse();
        expect(res).toEqual('query{Film(id:\"123\",title:\"{\\\"foo\\\":[\\\"\\n\\\",\\\"\\\\\\\",\\\"{\\\"zig\\\":\\\"giz\\\"}\\\"]}\")}');
    });
    it('returns simpliest query',()=>{
        //@ts-ignore
        const res = new GraphiosTs(Axios.create()).create('query','Test').gql(true).parse();
        expect(res).toBe('query{Test}');
    });
    it('parse query with aliased name',()=>{
        const res = gTs.create('query','Film').gql({
            'payload':{
                'id':true
            }
        }).alias('Test').parse();
        expect(res).toBe('query{Test:Film{id}}');
    });
})