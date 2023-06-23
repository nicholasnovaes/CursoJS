/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

function pagamentoPlano(idade){
    let valorPlano = 100

    if(idade < 10){
        valorPlano += 80
        return console.log(valorPlano)
    }else if(idade > 10 && idade <30){
        valorPlano += 50
        return console.log(valorPlano)
    }else if(idade > 30 && idade < 60){
        valorPlano += 50
        return console.log(valorPlano)
    }else if(idade > 60){
        valorPlano += 130
        return console.log(valorPlano)
    }
}

pagamentoPlano(4)
pagamentoPlano(20)
pagamentoPlano(35)
pagamentoPlano(65)
