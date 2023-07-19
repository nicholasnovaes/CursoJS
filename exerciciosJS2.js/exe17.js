let nums = [10, 20, 30 , 40, 50]

let resultado = nums.reduce(function(acumulador, atual){
    return acumulador + atual
})

console.log(resultado)