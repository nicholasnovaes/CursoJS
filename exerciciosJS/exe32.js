/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros*/

const vetor = [16, 20, 11, 15, 14, 13, 12, 82, 51, 56, 59, 44, 74, 28, 21, 19, 87, 8]

function media(num){
    let soma = 0
    
    for(i = 0; i < num.length; i++){
        soma += num[i]
    }
    return console.log(`A soma dos valores do vetor é de ${soma}, existem ${num.length} valores nesse vetor, portanto a media é de ${(soma / num.length)}`)
}

media(vetor)