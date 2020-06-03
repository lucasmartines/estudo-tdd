describe('teste to equal', function(){
    it('deve validar objetos to equal',function(){

        var obj1 = {valor:true}
        var obj2 = { valor:true}
        
        expect(obj1).toEqual(obj2)
    })
})
