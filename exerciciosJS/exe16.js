/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function operacoes(x, y, z){
    
    switch(y){
        case '+':
            return console.log(x + z)
    break;

    case '-':
        return console.log( x - z)
    break;

    case '/':
        return console.log(x / z)
    break;

    default:
        return console.log('Insira uma operaçao valida')
    }
}

operacoes(10, '+', 5)
operacoes(10, '-', 5)
operacoes(10, '/', 5)
operacoes(10, '*', 5)