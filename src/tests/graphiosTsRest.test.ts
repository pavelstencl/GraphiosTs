import Mock from 'axios-mock-adapter';
import Axios, { AxiosInstance } from 'axios';
import { GraphiosTsRest } from '../graphiosTsRest';
import {SwapiRest} from '../../.gql/swapiRest';

describe('GraphiosTsRest tests',()=>{
    let axios:AxiosInstance,mock:Mock,gts:GraphiosTsRest<SwapiRest>;
    beforeAll(()=>{
        axios = Axios.create()
        mock = new Mock(axios);
        gts = new GraphiosTsRest<SwapiRest>(axios)
    });
    beforeEach(()=>{
        mock.reset();
    });
    it('creates simple request',(done)=>{
        mock.onGet('/film/1/?sort=name').reply((config)=>{
            if(config.data && config.data === '{"name":"zig"}'){
                return [200,{id:'foo',name:'bar'}];
            }
            return [505]
        });
        gts.request('GET','/film/:id/',{
            'vars':{
                id:'1'
            },
            'args':{
                'sort':'name'
            },
            'data':{
                name:'zig'
            }
        }).then((data)=>{
            expect(data.data.id).toBe('foo');
            expect(data.data.name).toBe('bar');
            done();
        })
    });
    it('throws an error',()=>{
        expect(()=>{
            gts.request('GET','/film/:id/',{
                vars:{
                    false:'123'
                }
            });
        }).toThrowError();
        
    })
})