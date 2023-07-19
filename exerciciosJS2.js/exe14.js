const pessoa = {
    nome: 'Fulano',
    idade: 25,
    rua: 'Timbiras'
}

function arrays(obj){
    let resultado = []
    resultado.push(Object.entries(obj))
    return console.log(resultado)
}

arrays(pessoa)

