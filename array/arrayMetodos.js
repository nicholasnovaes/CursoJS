const pilotos = ['Vettel', 'Massa', 'Rubinho', 'Sena']
//Esse metodo remove o ultimo elemento do array
pilotos.pop()
console.log(pilotos)

//Esse metodo adiciona um novo elemento na ultima posicao
pilotos.push('Verstappen')

//Esse metodo remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

//Esse metodo adiciona um elemento na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

//Esse metodo adiciona ou remove elementos do array
//adicionar
pilotos.splice(2, 0, 'Sena', 'Bottas')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

//Esse metodo gera um NOVO ARRAY
//Nesse caso gerou outro array apartir do indice que foi indicado
const outrosPilotos1 = pilotos.slice(2)
console.log(outrosPilotos1)

//Nesse exemplo ele vai gerar outro array apartir dos indices que você passar
//Nesse caso do indice 1 ao 4( O INDICE 4 NAO ENTRA)
const outrosPilotos2 = pilotos.slice(1, 4)
console.log(outrosPilotos2)