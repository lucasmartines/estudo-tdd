describe('teste do fail',function( ) 
{
    it('deve demonstrar o uso do fail',function( ) 
    {   
        let operacao = function(exec,callback){
            if(exec){
                callback()
            }
        }
        operacao(false, function(){
            fail('não deve executar função de callback')
        })
    })
})