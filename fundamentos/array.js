const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'string');
console.log(valores);

console.log(valores.pop()) //esse metodo .pop() Retira o ULTIMO valor da array, fazendo com que o array perca esse valor.
delete valores[0]; //Essa é outra forma de retirar elementos do array
console.log(valores)

console.log(typeof valores); 