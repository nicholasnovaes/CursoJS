let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*
for(var x = 0; x < valores.length; x++){
    console.log(`A posição ${x} tem o valor de ${valores[x]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}