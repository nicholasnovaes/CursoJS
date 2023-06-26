/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/


function criancas(altura1, taxa1, altura2, taxa2){
    if(altura1 == altura2){
        if(taxa1 > taxa2){
            return console.log('A criança 1 vai ultrapassar a 2 em 1 ano.')
        }else if(taxa1 < taxa2){
            return console.log('A criança 2 vai ultrapassar a 1 em 1 ano.')
        }else if(taxa1 == taxa2){
            return console.log('As crianças tem a mesma altura e o mesmo crescimento.')
        }
    }else {
        if(altura1 > altura2){
            if(taxa1 >= taxa2){
                console.log('A criança 2 não ficará maior que a criança 1')
            }else{
                console.log(`A criança 2 vai ultrapassar a crianca 1 em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos.`)
            }
        }else if(altura1 < altura2){
            if(taxa1 <= taxa2){
                console.log('A criança 1 não ficará maior que a criança 2')
            }else if(taxa1 > taxa2){
                console.log(`A criança 1 vai ultrapassar a crianca 2 em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos.`)
            }
        }
    }

    function calcularTempo(alturaMenor, taxaMenor, alturaMaior, taxaMaior){
        let qtdAnos = 0
        while(alturaMenor < alturaMaior){
            alturaMenor += taxaMenor
            alturaMaior += taxaMaior
            qtdAnos++
        }
        return qtdAnos
    }
}

criancas(120, 2, 120, 2)
criancas(120, 2, 120, 1)
criancas(120, 1, 120, 2)
criancas(125, 5, 120, 6)
criancas(120, 6, 125, 5)
