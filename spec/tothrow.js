describe('teste do to throw',function( ) 
{
    it('deve demonstrar o uso do to throw!',function( ) 
    {
        function multiplicar(){
            numero * 5
        }

        function somar( a , b){
            return a + b
        }

        expect(multiplicar).toThrow()
        expect(somar ).not.toThrow()

    })
})