const escola = "Cod3r";

console.log(escola.charAt(4));  //Metodo para pegar determinado caracterie da string
console.log(escola.charAt(5)); //Resultado quando se pega um caractere inexistente
console.log(escola.charCodeAt(3)); //Metodo para saber o código do caractere
console.log(escola.indexOf('3')); //Metodo para pegar o caractere na posição 3 da palavra

console.log(escola.substring(1)); //Metodo para anular o caractere em determinada posiçao
console.log(escola.substring(0, 3)); // Metodo para pegar o conteudo entre a posiçao 0 e 3(Anulando a posição 3)

console.log('Escola '.concat(escola.concat("!"))); //Metodo para concatenar
console.log(escola.replace(3, 'e')); // Metodo para substituir um caractere em certa posição


console.log('Ana, Maria, Pedro'.split(',')); //Metodo para criar uma array, colocando o que separará os objetos como por exemplo a virgula
console.log('Nicholas Novaes de Araujo'.split(' '));

