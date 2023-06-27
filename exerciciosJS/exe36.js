/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5*/

const vetor = [10, 12, 60, 30, 2, 4]

function multi1(num, vetor){
    let vetorMulti1 = []

    for(i = 0; i < vetor.length; i++){
        vetorMulti1.push(vetor[i] * num)
    }
    console.log(vetorMulti1)
}
multi1(5, vetor)


function multi2(num, vetor){
    let vetorMulti2 = []

    for(i = 0; i < vetor.length; i++){
        if(vetor[i] > 5){
            vetorMulti2.push(vetor[i] * num)
        }
    }
    console.log(vetorMulti2)
}

multi2(5, vetor)