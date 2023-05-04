let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)

console.log(`O vetor tem  ${num.length} posições`);
console.log('------------------------------------');

console.log(`O primeiro valor do vetor é ${num[0]}`);
console.log('------------------------------------');

let pos = num.indexOf(7);
if(pos == -1){
    console.log(`O valor não existe dentro desta Array`)
}else{
    console.log(`O valor 8 está na posição ${pos}`);
}
 
