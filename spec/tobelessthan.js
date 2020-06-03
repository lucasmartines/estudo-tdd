describe('Teste do to be less than',function( ) 
{
    it('deve demonstrar o uso do to be less than',function( ) 
    {   
        let PI = 3.1415
        expect(3).toBeLessThan(PI)
        expect(PI).toBeLessThan(5)
    })
})