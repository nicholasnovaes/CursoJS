/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

const vetorInteiro = [10, 20, 30, 40]
const vetorString = ['dez', 'vinte', 'trinta', 'quarenta']
const vetorDouble = [10.1, 20.2, 30.3, 40.4 ]

function unir(...args){
    uniao = []
    for(i = 0; i < arguments.length; i++){
        uniao += arguments[i]
    }
    console.log(uniao)
}

unir(vetorInteiro, vetorString)
unir(vetorDouble, vetorString)