let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 8.4, 9.8, 7.7, 8.1]
for(let i = 0; i < notas.length; i++){  //crie sempre o indice com let, pois senao ficara visivel no escopo global
    console.log(`i = ${notas[i]}`)
}