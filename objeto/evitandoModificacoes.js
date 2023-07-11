//Object.preventExtensions
//Criando um objeto neste metodo é impossivel adicionar novas chaves á ele, porém é possivel deletar ou alterar os que já estao dentro
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99
, tag: 'promocao'})
//Essa método testa se o objeto foi criado com prevent extensions ou não
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) 

//Object.seal
//A diferença do seal para o preventExtensions é que não é possivel deletar nem adicionar novas chaves/valores, mas ainda é possivel modificar os que ja estao dentro
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)

//Este metodo testa se o objecto está selado ou não
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.cor = 'verde'
delete pessoa.nome
pessoa.idade = 19
console.log(pessoa)

//Object.freeze = selado = constantes
//Objeto criado com este metodo sempre se mantem constante, sendo impossivel fazer alterações

