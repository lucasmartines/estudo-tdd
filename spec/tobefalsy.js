describe('test to be falsy',function( ) 
{
    it('Shoud test the use of to be falsy',function( ) 
    {
        expect(null).toBeFalsy()
        expect(undefined).toBeFalsy()
        expect('').toBeFalsy()
        expect(NaN).toBeFalsy()
        expect(false).toBeFalsy()
        expect(0).toBeFalsy()

        expect('a').not.toBeFalsy()
    })
})