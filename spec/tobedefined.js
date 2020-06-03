describe('Teste do to be defined',function(){


    it('deve demonstrar o uso do toBeDefined',function(){
        let n1 = 10
        let n2
        let n3
        expect(n1).toBeDefined()
        expect(null).toBeDefined()
        expect(NaN).toBeDefined()

        expect(n2).not.toBeDefined()
    })

})