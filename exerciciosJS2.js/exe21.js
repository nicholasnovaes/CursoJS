let nums = [1, 5, -9, 10, 66, 57, -66]

function menorNumero(array){
    let menor = array[0]

    for(let i = 0; i < array.length; i++){
        if(array[i] < menor){
            menor = array[i]
        }
    }

    return console.log(menor)
}

menorNumero(nums)