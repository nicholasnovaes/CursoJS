const nome = 'Rebeca';
const concatenacao = 'Ola ' + nome + '!';
const template = `
    Olá
    ${nome} !`

    console.log(concatenacao, template) // A concatenaçao com crazes considera TUDO o que é digitado, tanto como TAB e quebras de linhas.

    //expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei.... ${up('cuidado!')}!`)