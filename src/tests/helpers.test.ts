import { GtsFragment, GtsAlias } from ".."
import { swapi } from "../../.gql/swapi.graphql"

describe('Helpers test',()=>{
    it('should create fragment',()=>{
        expect(new GtsFragment<swapi.Film['payload']>().data({'id':true})).toStrictEqual({'id':true})
    });
    it('should create alias',()=>{
        expect(new GtsAlias<swapi.Film['payload']>().data({id:true})).toStrictEqual({__type:'alias',payload:{id:true}});
    })
})