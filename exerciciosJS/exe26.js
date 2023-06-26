/*26) Fazer um programa para encontrar todos os pares entre 1 e 100.*/

function pares(){
    let pares = []
    for(i = 0; i <= 100; i++){
        if(i % 2 == 0){
            pares.push(i)
        }
    }
    return console.log(pares)
}

pares()