describe('comparador to be',function(){
    it('deve validar o uso do to be',function(){
        expect(true).toBe(true)
        expect('true').toBe('true')
        x = {x:'x'}
        x2 = {x:'x'}
        
        expect(x).not.toBe(x2)
    })
})