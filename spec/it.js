describe('testes CALCULO',function(){

    function media_array(valores){
            
        let media = 0
        let total = 0
        
        valores.forEach( item => { 
            if( !isNaN(item) ){
                total+=item
            }
        })
        
        media = total /valores.length
       
        return media
    }
    
    let Calculo = {
        media_array : media_array,
        subtrair: function(a,b){
            return a - b 
        },
        somar: function(a,b){return a + b},
    }

    beforeAll(function(){

        spyOn(Calculo,'media_array')
        spyOn(Calculo,'somar').and.returnValue(10)
        spyOn(Calculo,'subtrair').and.callThrough()
    })

    it( "deve subtrair com metodo verdadeiro de subtração, não o do spyon , e 2 - 1 é 1 ",function(){
        expect( Calculo.subtrair(2,1)).toEqual(1)
    })

    it( 'o metodo deve ter recebido dois parametros 1 e 2',function(){
        Calculo.somar(1,2)
        expect( Calculo.somar ).toHaveBeenCalledWith(1,2)
    })

    it('deve retornar 10 para o método somar', function(){
        
        expect(Calculo.somar() ).toEqual(10)
    })
    it('O metodo deve ser chamado uma vez',function(){
        Calculo.media_array([5,5,5])
        Calculo.media_array([5,5,5])
        expect(Calculo.media_array).toHaveBeenCalled()
    })

    xit('O metodo deve ser chamado varias vezes',function(){
        Calculo.media_array([5,5,5])
        Calculo.media_array([5,5,5])
        expect(Calculo.media_array).toHaveBeenCalledTimes(2)
    })

    xit('O metodo deve ser chamado varias vezes',function(){
        Calculo.media_array([5,5,5])
        Calculo.media_array([5,5,5])
        expect(Calculo.media_array).toHaveBeenCalledTimes(2)
    })

    xit('O media_array dev calcular a media em um array e retornar 5',function(){

        let resultado = Calculo.media_array([5,5,5])

        expect(resultado).toEqual(5)

    })

})