import { GraphiosTs } from "..";
import swapiGraphiosTs from "../../.gql/swapi.graphql";
import Axios from "axios";
import  Mock from 'axios-mock-adapter';

let axios = Axios.create({
    baseURL:'somerandomurl',
    method:'POST'
});
let gts = new GraphiosTs<swapiGraphiosTs>(axios), mock:Mock;
describe('Test connection',()=>{
    beforeAll(()=>{
        mock = new Mock(axios);
    })
    afterEach(()=>{
        mock.reset()
    })
    it('should send simple request',(done)=>{
        mock.onAny().reply((config)=>{
            if(config.data === '{"query":"query{allFilms{id}}"}'){
                return[200,{data:{allFilms:[{id:'foo'}]}}]
            }else{
                return[500];
            }
        });
        gts.create('query','allFilms').gql({
            'payload':{
                'id':true
            }
        }).request().then(({data,errors})=>{
            //@ts-ignore
            expect(data.allFilms[0].id).toBe('foo');
            done();
        })
    })
})