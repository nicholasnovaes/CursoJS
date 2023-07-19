let exemplo = [1, 2, 3, 4, 5]

function uniaoArray(array){
    let resultado = []
    let primeiroElemento = array.shift()
    let ultimoElemento = array.pop()
    resultado.push(primeiroElemento, ultimoElemento)
    return console.log(resultado)
}

uniaoArray(exemplo)