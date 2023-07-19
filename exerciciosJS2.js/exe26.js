function consoantes(string){
    const vogais = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']

    vogais.forEach(vogal => string = string.replace(vogal, ''))
    return console.log(string)
}

consoantes('Vou comprar pao')