/*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.
*/

const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

function uniaoVetor(vetor1, vetor2){
    let uniao = []
    uniao += uniao.concat(vetor1, vetor2)
    console.log(vetor1)
    console.log(vetor2)
    console.log(uniao)
}
uniaoVetor(vetorPilha, vetorAdiciona)

/*
function uniaoVetor(vetor1, vetor2){
    for(i = 0; i < vetor2.length; i++){
        vetor1.push(vetor2[i])
    }
    console.log(`valor após uniao : ${vetor1}`)
    console.log(`valor adicionado : ${vetor2}`)
}
uniaoVetor(vetorPilha, vetorAdiciona)
*/