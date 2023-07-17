function inverso(param){
    const tipo = typeof param

    if(tipo == 'boolean'){
        return !param
    }else if( tipo == 'number'){
        return -param
    }else{
        return 'Booleano ou numero esperados, mas o paramentro é do tipo string'
    }
}
console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(2000))
console.log(inverso('programação'))


