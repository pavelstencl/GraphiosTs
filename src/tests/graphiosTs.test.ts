import { GraphiosTs } from "..";
import swapiGraphiosTs from "../../.gql/swapi.graphql";
import Axios, { AxiosInstance } from "axios";
import  Mock from 'axios-mock-adapter';
import { GraphiosTsQueue } from "../graphiosTsQueue";

describe('Test connection',()=>{
    let axios:AxiosInstance,gts:GraphiosTs<swapiGraphiosTs>,mock:Mock;
    beforeAll(()=>{
        axios = Axios.create();
        gts = new GraphiosTs<swapiGraphiosTs>(axios,{
            queue:new GraphiosTsQueue(),
            refetch:2,
            refetchPause:0,
        });
        mock = new Mock(axios);
    })
    afterEach(()=>{
        mock.reset()
    })
    it('Sends simple request',(done)=>{
        mock.onAny().reply((config)=>{
            if(config.data === '{"query":"query{allFilms{id}}"}'){
                return[200,{data:{allFilms:[{id:'foo'}]}}]
            }else{
                return[500];
            }
        });
        gts.create('query').gql({
            'allFilms':{
                'payload':{
                    'id':true
                }
            }
        }).request().then((data)=>{
            expect(data.allFilms[0].id).toBe('foo');
            done();
        });
    });
    it('Gets network error',(done)=>{
        mock.onAny().reply(500);
        gts.create('query').gql({
            'allFilms':{
                'payload':{
                    'id':true
                }
            }
        }).request().catch((e)=>{
            expect(e.name).toBe('GraphiosTsNetworkError');
            done();
        })
    });
    it('Gets empty data',(done)=>{
        mock.onAny().reply(200);
        gts.create('query').gql({
            'allFilms':{
                'payload':{
                    'id':true
                }
            }
        }).request().catch((e)=>{
            expect(e.name).toBe('GraphiosTsDataError');
            done();
        });
    });
    it('Gets error in data',(done)=>{
        mock.onAny().reply(200,{
            data:null,
            errors:[{
                message:'Some error'
            }]
        });
        gts.create('query').gql({
            'allFilms':{
                'payload':{
                    'id':true
                }
            }
        }).request().catch((e)=>{
            expect(e.name).toBe('GraphiosTsResponseError');
            done();
        });
    });
    it('sends request multiple times when server returns 500',(done)=>{
        let count = 0;
        let lastData;
        mock.onAny().reply((config)=>{
            if(count === 0){
                lastData = config.data;
                count++;
                return [500]
            }else{
                return [200,{data:{allFilms:[{id:'foo'}]}}]
            }
        });
        gts.create('query').gql({
            'allFilms':{
                'payload':{
                    'id':true
                }
            }
        }).request().then((data)=>{
            expect(count).toBe(1);
            expect(data.allFilms[0].id).toBe('foo');
            done();
        })
    });
    it('sends multiple request, but all fails',(done)=>{
        mock.onAny().reply(500);
        gts.create('query').gql({
            'allFilms':{
                'payload':{
                    'id':true
                }
            }
        }).request().catch((e)=>{
            expect(e.name).toBe('GraphiosTsNetworkError');
            done()
        })
    });
    it('should fail because of server error',(done)=>{
        mock.onAny().reply(500);
        new GraphiosTs<swapiGraphiosTs>(axios,{
            axios:{
                baseURL:'foo'
            }
        }).create('query').gql(
            {
                'Film':{
                    'payload':{
                        'id':true
                    }
                }
            }
        ).request().catch((e)=>{
            expect(e.name).toBe('GraphiosTsNetworkError');
            done();
        })
    })
})