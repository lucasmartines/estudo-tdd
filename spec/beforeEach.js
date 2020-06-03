describe('teste before each',function( ) 
{
    var contador = 0

    beforeEach(function(){
        contador ++ 
    })

    xit('deve incrementar o contador para 1',function( ) 
    {
        expect(contador).toEqual(1)
    })

    xit('deve incrementar o contador para 2', function(){
        expect(contador).toEqual(2)
    })
})