const nums = [1, 8, 10, 60, 80, 55, 64]

function segundoMaior(nums){
    let maiorNum = 0
    let segundoMaior = 0

    nums.forEach((numero, indice) => {
        if(numero > nums[maiorNum]){
            maiorNum = indice
        }
    })    

    nums.splice(maiorNum, 1)
    segundoMaior = nums[0]

    nums.forEach(numero => {
        if(numero > segundoMaior){
            segundoMaior = numero
        }
    })

    return console.log(segundoMaior)
}

segundoMaior(nums)