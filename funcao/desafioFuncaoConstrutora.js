//Funçao construtora
function Pessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
    
}
const fabricio = new Pessoa('Fabricio')
fabricio.falar()

console.log('---------------------------------')
//Função Factory
const p1 = new Pessoa('Nicholas')
p1.falar()

function prod(nome,preco){
    return{
        nome,
        preco
    }
}
console.log(prod('Macbook', 1499.00))
console.log('---------------------------------')
//Classe
class Pessoa1{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa1('João')
p2.falar()