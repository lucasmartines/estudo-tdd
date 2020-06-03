describe('teste do after each',function( ) 
{
    let contador = 0

    beforEach(function(){
        contador ++
    })

    afterEach(function(){
        contador = 0
    })
    
    it('deve garantir o valor 1 para o contador',function(){
        expect(contador).toEqual(1)
    })
    it('deve garantir o valor 1 para o contador',function(){
        expect(contador).toEqual(1)
    })
})