function letras(string, letra){
    let array = string.split('')
    let resultado = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] === letra){
            resultado++
        }
    }

    return console.log(resultado)
}

letras('nicholas', 'a')
letras('Atirei o Pau no gato', 'a')