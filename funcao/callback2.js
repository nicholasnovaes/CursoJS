const notas = ['7.7', '8.5', '6.4', '7.9', '4.5', '5.5', '9.9'];

// sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}