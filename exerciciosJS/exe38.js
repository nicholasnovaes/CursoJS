/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/


function intervalo(inicio = 0, fim = 100){
    let resultado = []

    if(inicio < fim){
        for(i = 0; i < fim; i++){
            if(i % 2 !== 0){
                resultado.push(i)
            }
        }
    }else {
        for(i = 0; i < inicio; i++){
            if(i % 2 !== 0){
                resultado.push(i)
            }
        }
    }
    return console.log(resultado)
}
intervalo()
intervalo(1, 15)
intervalo(73, 20)