describe('Teste do tobe null',function( ) 
{
    it('deve demonstrar o uso do tobe null',function( ) 
    {
        let n1 = null
        let n2 = undefined
        let n3
        let n4 = NaN
        let n5 = 'teste'

        expect(n1).toBeNull()
        expect(n2).not.toBeNull()
        expect(n3).not.toBeNull()
        expect(n4).not.toBeNull()
        expect(n5).not.toBeNull()


    })
})