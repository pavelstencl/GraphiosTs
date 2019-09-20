import { GtsFragment, GtsAlias } from ".."
import { swapi } from "../../.gql/swapi.graphql"

describe('Helpers test',()=>{
    it('should create fragment',()=>{
        const res = new GtsFragment<swapi.Film['payload']>().data({'id':true});
        expect(res).toStrictEqual({'id':true})
    });
    it('should create alias',()=>{
        const res = new GtsAlias<swapi.Film['payload']>().data({id:true});
        expect(res).toStrictEqual({__type:'alias',payload:{id:true}});
    });
})