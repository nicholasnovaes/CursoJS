let numeros = [1, 4, 8, 9, 4, 54 ,65, 4, 10]

function pares(array){
    let resultado = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0 && i % 2 == 0){
            resultado.push(array[i])
        }
    }
    return console.log(resultado)
}

pares(numeros)