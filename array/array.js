 //Forma nao recomendada
 let aprovados = new Array('Bia', 'Carlos', 'Ana')
 console.log(aprovados)

 aprovados = ['Bia', 'Carlos', 'Ana']
 console.log(aprovados[0])
 console.log(aprovados[1])
 console.log(aprovados[2])
 console.log(aprovados[3])
 
 aprovados[3] = 'Paulo'
 console.log(aprovados[3])
 aprovados.push('Abia')
 console.log(aprovados.length)

 aprovados[9] = 'Rafael'
 console.log(aprovados.length)
 console.log(aprovados[8] === undefined)
 console.log(aprovados)

 //Esse metodos ordena os arrays, nesse caso em ordem alfabetica,ESSE METODO ALTERA O ARRAY
 aprovados.sort()
 console.log(aprovados)
 
 delete aprovados[1]
 console.log(aprovados)
 console.log(aprovados[2])

 aprovados = ['Bia', 'Carlos', 'Ana']
 //Esse metodo serve para adicionar OU remover elementos, ou os dois ao mesmo tempo
 //1 parametro: indice, 2 parametro: até onde você quer retirar os elementos apartir do indice, 3p : Elementos que voce quer adicionar
 aprovados.splice(1, 1 , 'Elemento1', 'Elemento2')
 console.log(aprovados)