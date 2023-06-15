//2) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function triangulo(lado1 = 1, lado2 = 1, lado3 = 1){
    if(lado1 == lado2 && lado2 == lado3){
        return console.log('Triangulo Equilátero')
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        return console.log('Triangulo Isóceles')
    }else if(lado1 != lado2 && lado1 != lado3 && lado2 !== lado3){
        return console.log('Triangulo Escaleno')
    }
}

triangulo(2, 2, 2)
triangulo(2, 1, 1 )
triangulo(1, 2, 3)
triangulo()