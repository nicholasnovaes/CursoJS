const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado! Sua nota foi de ' + nota)
    }else{
        console.log(`Reprovado! Sua nota foi de ${nota}`)
    }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado('Epa!') //cuidado!!



function testando(nota){
    if(typeof(nota) == 'number'){
        if(nota >= 7){
            console.log('Aprovado! Sua nota foi de ' + nota)
        }else{
            console.log(`Reprovado! Sua nota foi de ${nota}`)
        }
    }else{
        console.log('Digite um numero!')
    }
}

testando(8)
