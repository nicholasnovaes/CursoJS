function valorAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao // somente iniciada a variável, sem valor inicial

do{
    opcao = valorAleatorio(-1, 10)
    console.log(`O valor do código foi de ${opcao}`)
}while(opcao != -1)

console.log('fim do codigo')