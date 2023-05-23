// par nome/valor
const saudacao = 'opa' // contexto lexico 1

function exec() {
    const saudacao = 'Valor' // contexto lexico 2
    return saudacao
}


//Objetos são grupos aninhados de pares/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        lugadouro: 'Rua Timbiras',
        numero: 1221
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)