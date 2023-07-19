const variedades = ['caneta', 1, '3', 'web', 20]
const apenasLetras = ['caneta', 'papel', 'CELUlar']
function filtrar(a){
    let resultado = []
    for(let i = 0; i < a.length; i++){
        if(typeof a[i] == 'number'){
            resultado.push(a[i])
        }
    }
    return console.log(resultado)
}

filtrar(variedades)
filtrar(apenasLetras)