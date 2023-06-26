/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor*/

const vetor = [10, 22, 11, 15, 14, 13, 12, 81, 51, 56, 59, 44, 74, 22, 21, 19, 87, 8]

function maiorEMenor(vetor){
    let maior
    let menor

    for(i = 0; i < vetor.length; i++){
        if(maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        }else{
            if(vetor[i] > maior){
                maior = vetor[i]
            }else if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    console.log(`O maior numéro é ${maior}, e o menor numero é  ${menor}.`)
}
maiorEMenor(vetor)