import { isFragment } from "../utils/isFragment";

describe('test for picking one fragment',()=>{
    it('is picked fragment',()=>{
        const data = {
            __typename:'Film',
            __onFilm:{
                id:'foo'
            }
        };
        expect(isFragment(data,'__onFilm')).toBe(true);
    });
    it('is not picked fragment',()=>{
        const data = {
            __typename:'Movie',
            __onFilm:{
                id:'foo'
            }
        };
        expect(isFragment(data,'__onFilm')).toBe(false);
    })
})