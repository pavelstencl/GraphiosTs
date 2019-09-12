import { GraphiosTs } from ".."
import Axios from "axios"
import swapiGraphiosTs from "../../.gql/swapi.graphql";
import { GraphiosTsGenericError, GraphiosTsParseError } from "../errors";


let gTs = new GraphiosTs<swapiGraphiosTs>(Axios.create());
describe('GraphQL request compiling tests',()=>{
    it('Compiles basic request to GraphQl syntax',()=>{
        const res = gTs.create('query','SpecificFilm').gql({
            'Film':{
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
            }
        }).parse();
        expect(res).toBe('query SpecificFilm{Film(id:"cj0nxmy3fga5s01148gf8iy3c",title:"A New Hope"){id,characters{eyeColor}}}');
    });
    it('Compiles request with aliased objects',()=>{
        const res = gTs.create('query').gql({
            'allFilms':{
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
            }
        }).parse();
        expect(res).toBe('query{allFilms{test:characters(first:2){gen:gender}}}');
    });
    it('Compiles request with inline fragments',()=>{
        const res = gTs.create('query').gql({
            'node':{
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
            }
        }).parse();
        expect(res).toBe('query{node(id:"cj0nxmy3fga5s01148gf8iy3c"){__typename,...on Film{id,characters(last:2){gender}}}}');
    });
    it('Escapes dangerous chars in args',()=>{
        const res = gTs.create('query').gql({
            'Film':{
                'args':{
                    'id':'123',
                    'title':`{"foo":["\n","\\","{\"zig\":\"giz\"}"]}`
                },
                'payload':true
            }
        }).parse();
        expect(res).toEqual('query{Film(id:\"123\",title:\"{\\\"foo\\\":[\\\"\\n\\\",\\\"\\\\\\\",\\\"{\\\"zig\\\":\\\"giz\\\"}\\\"]}\")}');
    });
    it('Compiles simpliest request without any payload.',()=>{
        const res = new GraphiosTs(Axios.create()).create('query').gql({
            //@ts-ignore
            'Test':true
        }).parse();
        expect(res).toBe('query{Test}');
    });
    it('Compiles request with multiple operations',()=>{
        const res = gTs.create('query').gql({
            'allFilms':{
                'payload':{
                    'id':true
                }
            },
            'allPersons':{
                'payload':{
                    'eyeColor':true
                }
            }
        }).parse();
        expect(res).toBe('query{allFilms{id},allPersons{eyeColor}}');
    });
    it('Compiles complex request with all features',()=>{
        const res = gTs.create('query','ComplexQuery').gql({
            'films':{
                __type:'alias',
                payload:{
                    'allFilms':{
                        'payload':{
                            'badGuy':{
                                __type:'alias',
                                payload:{
                                    'director':true
                                }
                            }
                        }
                    }
                }
            },
            'node':{
                'args':{
                    'id':'cj0nxmy3xga5u0114fbqads8y',
                },
                'payload':{
                    '__typename':true,
                    '__onFilm':{
                        '__type':'fragment',
                        'payload':{
                            'director':true
                        }
                    },
                    '__onPerson':{
                        '__type':'fragment',
                        'payload':{
                            'eyeColor':true
                        }
                    }
                }
            }
        }).parse();
        expect(res).toBe('query ComplexQuery{films:allFilms{badGuy:director},node(id:"cj0nxmy3xga5u0114fbqads8y"){__typename,...on Film{director},...on Person{eyeColor}}}');
    });
    it('throws an error because payload is not defined',()=>{
        try{
            gTs.create('query').request();
            expect('').toThrowError(GraphiosTsGenericError);

        }catch(e){
            expect(e.name).toBe('GraphiosTsGenericError')
        }
    });
    it('throws an error, because refetch is called before request method',()=>{
        try{
            gTs.create('query').gql({
                'Film':{
                    'payload':{
                        'id':true
                    }
                }
            }).refetch();
            expect('').toThrowError(GraphiosTsGenericError);

        }catch(e){
            expect(e.name).toBe('GraphiosTsGenericError')
        }
    });
    it('throws an error, because alias has more then one item in a payload',()=>{
        try{
            gTs.create('query').gql({
                'Test':{
                    __type:'alias',
                    'payload':{
                        'Film':{
                            'payload':{
                                'id':true
                            }
                        },
                        'Person':{
                            'payload':{
                                'eyeColor':true
                            }
                        }
                    }
                }
            }).parse();
            expect('').toThrowError(GraphiosTsParseError);
        }catch(e){
            expect(e.name).toBe('GraphiosTsParseError');
        }
    })
})