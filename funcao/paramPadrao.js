//estratégia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log('Estratégia 1')
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
console.log(soma1(4, 5, 6))


// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log('Estratégia 2, 3 e 4')
console.log(soma2(), soma2(3, soma2(1, 2, 3)), soma2(0, 0, 0))



//valor padrao do ec2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log('Estratégia mais nova')
console.log(soma3(3), soma3(), soma3(4, 5), soma3(0, 0, 0))