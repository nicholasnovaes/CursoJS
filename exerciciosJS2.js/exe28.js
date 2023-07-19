const nums = [230 ,63, 88, 1, 656, 59, 99, 454, 111]

function qtdNum(array, digito){
    let resultado = []

    for(let i = 0; i < array.length; i++){
        const qtDig = String(array[i]).length

        if(qtDig === digito){
            resultado.push(array[i])
        }
    }

    return console.log(resultado)
}

qtdNum(nums, 2)