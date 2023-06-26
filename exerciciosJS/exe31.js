/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console*/

const vetor = [10, 22, 11, -15, 14, 13, -12, -81, 51, -56, 59, 44, 74, -22, 21, -19, 87, 8]

function negativos(vetor){
    let neg = 0

    for(i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            neg++
        }
    }
    console.log(`Neste vetor há ${neg} numeros negativos`)
}

negativos(vetor)