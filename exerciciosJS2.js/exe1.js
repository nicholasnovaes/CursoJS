function cumprimento(nome){
    const saudacao = 'Ola'
    return [saudacao, nome].join(',').concat('!')
}

console.log(cumprimento('Nicholas'))