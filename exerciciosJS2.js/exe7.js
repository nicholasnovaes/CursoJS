function estaEntre(numero, minimo, maximo, inclusivo){
    if(inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && maximo
}

console.log(estaEntre(10, 100, 50))