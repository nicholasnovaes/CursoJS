const produtos = {
    'nome': 'Caneta',
    'preco': 2,
    'cor': 'Verde'
}

function remover(obj, chave){
    const copia = Object.assign({}, obj)
    delete copia[chave]

    return console.log(copia)
}

remover(produtos, 'nome')

