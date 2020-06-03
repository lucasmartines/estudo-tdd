describe('Teste do tobe undefined',function( ) 
{
    it('deve demonstrar o uso do to be undefined',function( ) 
    {
        let n1;
        let n2;
        
        let n3 = false;

        expect(n1).toBeUndefined()
        expect(n2).toBeUndefined()

        expect(n3).not.toBeUndefined()
        expect(null).not.toBeUndefined()

    })
})