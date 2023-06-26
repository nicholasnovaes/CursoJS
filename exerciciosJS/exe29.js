/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações*/

const vetor = [10, 22, 11, 15, 14, 13, 12, 81, 51, 56, 59, 44, 74, 22, 21, 19, 1, 87, 8]

function intervalo(num){
    let entre10E20 = []
    let resto = []
    for(i = 0; i < num.length; i++){
        if(num[i] >= 10 && num[i] <= 20){
            entre10E20.push(num[i])
        }else{
            resto.push(num[i])
        }
    }

    console.log(`Entre o intervalo de 10 e 20 são ${entre10E20.length} e são ${resto.length} fora desse intervalo`)
}

intervalo(vetor)