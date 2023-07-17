function salario(horasTrabalhadas, valorHora){
    let resultado = horasTrabalhadas * valorHora
    return `Salário igual á R$${resultado}`
}
const jose = salario(150, 40.5)
console.log(jose)

//Foram feitos dois exemplos pois na resolução a questão passada era um pouco diferente
function salarioLiquido(horasTrabalhadas, valorHora){
    let resultado = horasTrabalhadas * valorHora
    return `Salário liquido igual á R$${resultado - (resultado * 0.30)}`
}

console.log(salarioLiquido(180, 60))