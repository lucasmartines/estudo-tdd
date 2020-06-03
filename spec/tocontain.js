describe('Teste do to contain',function( ) 
{
    it('deve demonstrar o uso do toContain',function( ) 
    {
        let texto = 'meu nome é Lucas'
        let frutas = ['laranja','banana','pera']

        expect(texto).toContain("Lucas")
        expect(texto).not.toContain("lucas")
        expect(frutas).toContain('banana')
    })
})