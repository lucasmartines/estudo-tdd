describe('testes do spy',function( ) 
{
    let Calculadora = {
        somar: function(n1,n2){ return n1+n2}
    }

    beforeAll( function(){

        spyOn(Calculadora,'somar')
    })


    it('deve chamar o metodo ao menos uma vez',function(){
        Calculadora.somar(1,1)
       // console.log(Calculadora)
        expect(Calculadora.somar).toHaveBeenCalled()
    })

    it('deve chamar o metodo somar duas vezes',function(){
        Calculadora.somar(1,1)
        Calculadora.somar(1,3)

        expect(Calculadora.somar).toHaveBeenCalled(2)
    })
    // it('deve possuir o método somar como não definido',function(){
    //     //expect( Calculadora.somar(1,1)).toBeUndefined()

        
    // })
})