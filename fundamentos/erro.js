function tratarErroELancar(erro){
    //throw new Error ('Erro de processamento')
    //throw 10
    //throw true
    //throw 'string'
    throw {
        nome: erro.name,
        msg: erro.messsage,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
}

const obj = { name: 'Roberto'}
imprimirNomeGritado(obj)