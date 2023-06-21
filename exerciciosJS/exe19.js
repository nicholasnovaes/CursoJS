function pedido(codigo, qtd){
    let x = codigo
    let y = qtd
    let pedidoEfetuado = 0

    switch(x){
        case '100':
            pedidoEfetuado = 'R$' + (y * 3)
        break;

        case '200':
            pedidoEfetuado = 'R$' + (y * 4)
        break;

        case '300':
            pedidoEfetuado = 'R$' + (y * 5.50)
        break;

        case '400':
            pedidoEfetuado = 'R$' + (y * 7.50)
        break;
        
        case '500':
            pedidoEfetuado = 'R$' + (y * 3.50)
        break;

        case '600':
            pedidoEfetuado = 'R$' + (y * 2.80)
        break;

        default:
            pedidoEfetuado = 'Esse produto não existe.'
    }

    console.log(pedidoEfetuado)
}

pedido('100', 2)
pedido('200', 3)
pedido('300', 4)
pedido('400', 5)
pedido('500', 6)
pedido('600', 2)
pedido('700', 2)
