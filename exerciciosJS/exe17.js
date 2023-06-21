function aumento(salario, plano){
    
    let planoA = salario * 0.10
    let planoB = salario * 0.15
    let planoC = salario * 0.20

    switch(plano){
        case 'a':
            return console.log(salario + planoA)
        break;

        case 'b':
            return console.log(salario + planoB)
        break;

        case 'c':
            return console.log(salario + planoC)
        break;

        default:
            return console.log('Esse plano é invalido')
    }
}

aumento(1000, 'a')
aumento(1000, 'b')
aumento(1000, 'c')
aumento(1000, 'd')
