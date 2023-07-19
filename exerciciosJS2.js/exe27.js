const obj1 = { a : 1, b: 2, c: 3}

function inverter(obj){
    let resultado = {}

    Object.entries(obj).forEach(parChaveValor => {
        const chave = 0,
        valor = 1

        resultado[parChaveValor[valor]] = parChaveValor[chave]

    })

    return console.log(resultado)
}

inverter(obj1)