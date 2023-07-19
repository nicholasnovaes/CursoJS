function sorte(num){
    const min = 1
    const max = 10
    let numSorteado = Math.floor(Math.random() * (max - min) + min)

    if(numSorteado === num){
        return console.log(`Parabens! O numero sorteado foi ${numSorteado}`)
    }else{
        return console.log(`Que pena! O numero sorteado foi ${numSorteado}`)
    }
}

sorte(5)
sorte(7)