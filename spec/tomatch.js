describe('Teste do to match',function(){
    
    it('deve validar o uso to toMatch',function(){

        let texto = 'teste com jasmine'
        expect(texto).toMatch(/Jasmine/i)

        expect('12345-456').toMatch(/^\d{5}-\d{3}$/ )
    })
})