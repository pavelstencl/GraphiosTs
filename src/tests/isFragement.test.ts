import { isFragment , getFragment } from "../utils/isFragment";

describe('test for picking one fragment',()=>{
    it('validates fragment type',()=>{
        const data = {
            __typename:'Film',
            __onFilm:{
                id:'foo'
            }
        };
        expect(isFragment(data,'__onFilm')).toBe(true);
    });
    it('does not validate fragment type',()=>{
        const data = {
            __typename:'Movie',
            __onFilm:{
                id:'foo'
            }
        };
        expect(isFragment(data,'__onFilm')).toBe(false);
    });
    it('returns data',()=>{
        expect(getFragment({foo:'bar'}).foo).toBe('bar');
    })
});