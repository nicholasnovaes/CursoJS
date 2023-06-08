const valor = 'Global'

function minhaFuncao(){
    console.log('Função minhaFuncao = ' + valor)
}

function exec(){
    const valor = "Local"
    minhaFuncao()
    console.log('Função exec = ' + valor)
}

exec()