const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Esse loop pega o valor atual e faz algo com o valor seguinte
//Nesse caso ele soma o valor anterior com o atual, e esse resultado somado com o numero seguinte
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

//Esse 10 é o valor inicial

console.log(resultado)