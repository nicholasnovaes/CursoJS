//a function declaration pode ser chamada mesmo antes de ser declarada, diferente da expression que só pode ser chamada depois de declarada

console.log(soma(3, 4))
//function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y){
    return x - y
}
console.log(sub(5, 4))

//named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))