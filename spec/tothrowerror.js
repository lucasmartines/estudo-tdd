describe('Teste do throw error',function( ) 
{
    it('deve demonstrar o uso do toThrowError',function( ) 
    {
        let somar = function(n1,n2){
            if( n1 <= 0 || n2 <= 0 ){
                throw new TypeError('Deve ser maior que 0')
            }
            return n1+n2
        }

        expect( () => somar(0,1) ).toThrowError()
        expect( () => somar(1,1) ).not.toThrowError()
        expect( () => somar(0,0) ).toThrowError(new RegExp('maior que 0'))
        expect( () => somar(0,0) ).toThrowError(TypeError)
        expect( () => somar(0,0) ).toThrowError(TypeError,new RegExp('maior que 0'))
    })
})