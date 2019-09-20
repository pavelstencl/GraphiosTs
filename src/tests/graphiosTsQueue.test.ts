import Axios, { AxiosInstance } from "axios";
import { GraphiosTs } from "..";
import swapiGraphiosTs from "../../.gql/swapi.graphql";
import { GraphiosTsQueue } from "../graphiosTsQueue";
import  Mock from 'axios-mock-adapter';

describe('Queue',()=>{
    let axios:AxiosInstance,gts:GraphiosTs<swapiGraphiosTs>,mock:Mock;
    beforeAll(()=>{
        axios = Axios.create();
        mock = new Mock(axios);
        gts = new GraphiosTs<swapiGraphiosTs>(axios,{
            queue:new GraphiosTsQueue(),
            refetch:2,
            refetchPause:0,
        });
    })
    afterEach(()=>{
        mock.reset()
    });
    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        done();
      });
    it('Sends one mutation request and two query requests',(done)=>{
        //Setting mock reply
        mock.onAny().reply((config)=>{
            //Query response
            if(config.data.includes('COMPOSITION__UNKNOWN__Req2')){
                return[200,{
                    "data": {
                        "c0__r0__alias": [
                            {
                            "id": "foo"
                            }
                        ],
                        "c0__r1__allAssets": [
                            {
                            "height": 500
                            }
                        ],
                        "c1__r0__Planet":{
                            id:'bar'
                        }
                    }
                }];
            //Mutation response
            }else if(config.data.includes('COMPOSITION__Req3')){
                return[200,{
                    data:{
                        c0__r0__createFilm:{
                            id:'123'
                        }
                    }
                }];
            }else{
                return [505];
            }
        });
        //First query
        const res1 = gts.create('query').gql({
            'alias':{
                __type:'alias',
                'payload':{
                    'allFilms':{
                        'payload':{
                            'id':true
                        }
                    }
                }
            },
            'allAssets':{
                'payload':{
                    'height':true
                }
            }
        }).request({
            batched:true
        });
        //Second query
        const res2 = gts.create('query','Req2').gql({
            'Planet':{
                'payload':{
                    'id':true
                }
            }
        }).request({batched:true});
        //First mutation
        const req3 = gts.create('mutation','Req3').gql({
            'createFilm':{
                //@ts-ignore
                'args':{
                    'planetsIds':['123']
                },
                payload:{
                    'id':true
                }
            }
        }).request({batched:true});

        Promise.all([res1,res2,req3]).then(([r1,r2,r3])=>{
            expect(r3.createFilm.id).toBe('123');
            expect(r1.alias[0].id).toBe('foo');
            expect(r1.allAssets[0].height).toBe(500);
            expect(r2.Planet.id).toBe('bar');
            done();
        });
    });
    it('Throws an error, because subscription cannot be batched',(done)=>{
        gts.create('subscription').gql({
            'Film':{
                'payload':{
                    'mutation':true
                }
            }
        }).request({batched:true}).catch((e)=>{
            expect(e.name).toBe('GraphiosTsGenericError');
            done();
        })
    });
})