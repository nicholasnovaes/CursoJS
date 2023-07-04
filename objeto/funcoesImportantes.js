const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

//aqui nao conseguiu alterar pois o defineProperty nao é sobrescrito
pessoa.dataNascimento = '02/02/2020'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
//neste metodo é como se concatenasse os objetos em um só, onde o primeiro é o destino e apos isso todos são somados ao destino
const obj = Object.assign(dest, o1, o2)
console.log(dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

