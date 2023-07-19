let despesasTotais = [
    {nome: 'Jornal Online', categoria: 'Informação', preco: 89.99},
    {nome: 'Cinema', categoria: 'Entreterimento', preco: 150}
]

let resultado = despesasTotais.map(a => a.preco).reduce(function(acumulador, atual){
    return acumulador + atual
})

console.log(resultado)