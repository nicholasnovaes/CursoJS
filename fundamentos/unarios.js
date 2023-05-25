let num1 = 1
let num2 = 2

num1++ //fomrma pós fixada
console.log(num1)
--num1 //forma pré fixada. Essa forma tem mais prioridade
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)