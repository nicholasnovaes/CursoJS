/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

function frutas(fruta){
    let produto = fruta

    switch(produto){
        case 'maca':
            return console.log('Nao vendemos esta fruta aqui')
            break;

        case 'kiwi':
        return console.log('Estamos com escasses de kiwi')
        break;

        case 'melancia':
        return console.log('Aqui está sao 3 reais o quilo')
        break;

        default:
            return console.log('ERRO')
    }
}

frutas('maca')
frutas('kiwi')
frutas('melancia')
frutas('uva')

