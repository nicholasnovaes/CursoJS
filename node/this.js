console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

//this DENTRO  de uma função, sempre aponta para o global, fora disso ele aponta pra module.exports / exports
//A nao ser que seja uma arrow function, que fara com q o this volte a apontar para o module.exports / exports

function logThis(){
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = 'Isso esta dentro do escopo global'
}

logThis()
