// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa //Ele basicamente cria variaveis diretamente do objeto para fora
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // Desta forma é possivel nomear as variaveis que você retirou do objeto
console.log(n, i)

const {sobrenome, nomedopai = true} = pessoa
console.log(sobrenome, nomedopai)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)