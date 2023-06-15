/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function simples(capital, taxa, tempo){
    let valorTotal = ((capital * (taxa / 100)) * tempo)
    
    return console.log((capital + valorTotal).toFixed(2).toString().replace('.', ','))
}

console.log(simples(5000, 5, 8))

function composto(capital, taxa, tempo){
    let valorTotal = (capital * (1 + (taxa / 100)) ** tempo)

    return console.log('R$' + (capital + valorTotal).toFixed(2).toString().replace('.', ','))

}

console.log(composto(5000, 5, 8))