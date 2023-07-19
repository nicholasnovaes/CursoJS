function possui(palavra, array){
    let resultado = []

    for(let i = 0; i < array.length; i++){
        if(array.includes(palavra)){
            resultado.push(array[i])
        }
    }

    return console.log(resultado)
}

possui('pro', ['programação', 'volei', 'profissional', 'pescoço', 'progressivo'])