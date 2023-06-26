/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

const numeros = [10, 22, 11, 15, 14, 13, 12, 81, 51, 56, 59, 44, 74, 22, 21, 19, 1, 87, 8]

function paresEImpares(num){
    let pares = []
    let impares = []

    for(i = 0; i < num.length; i++){
        if(num[i] % 2 == 0){
            pares.push(num[i])
        }else{
            impares.push(num[i])
        }
    }

    console.log(`Sáo ${pares.length} numeros pares e ${impares.length} impares.`)
}

paresEImpares(numeros)

