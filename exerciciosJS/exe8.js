/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo) 
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 

function comparaPontos(stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdRecords = 0
    let piorJogo = 1
    let pMax = pontuacoes.length[0]
    let pMin = pontuacoes.length[0]

    for(i = 1; i < pontuacoes.length[i]; i++){
        if(parseInt(pMax) > pontuacoes[i]){
            pMax += pontuacoes[i]
        }else if(parseInt(piorJogo < pontuacoes[i])){
            piorJogo = i + 1
        }
        return console.log(qtdRecords, piorJogo )
    }
}

console.log(comparaPontos())