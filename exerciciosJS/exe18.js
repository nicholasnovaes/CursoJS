/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

function intervalo(num){
    switch(num){
        case '0':
            return console.log('Zero')
        break;
        case '1':
            return console.log('Um')
            case '2':
        break;
            return console.log('Dois')
        case '3':
            return console.log('Tres')
        break;
        case '4':
            return console.log('Quatro')
        break;
        case '5':
            return console.log('Cinco')
        break;
        case '6':
            return console.log('Seis')
        break;
        case '7':
            return console.log('Sete')
        break;
            case '8':
            return console.log('Oito')
        case '9':
            return console.log('Nove')    
        break;
        case '10':
            return console.log('Dez')
        break;

        default:
            return console.log('Numero fora do intervalo')
    }
}

intervalo('0')
intervalo('1')
intervalo('2')
intervalo('3')
intervalo('4')
intervalo('5')
intervalo('6')
intervalo('7')
intervalo('8')
intervalo('9')
intervalo('10')
intervalo('11')