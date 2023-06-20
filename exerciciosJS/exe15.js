/*5) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

function comprarCarro(carro){
    switch(carro){
        case 'hacth':
            return console.log('Compra efetuada com sucesso')
        break;

        case 'motocicleta':
            return console.log('Tem certeza que não prefere este modelo?')
        break;

        case 'caminhonete':
            return console.log('Tem ceteza que não prefere este modelo?')
        break;

        default:
            return console.log('Nao trabalhamos com este tipo de automovel aqui')
    }
}

comprarCarro('hacth')
comprarCarro('motocicleta')
comprarCarro('caminhonete')
comprarCarro('jetski')