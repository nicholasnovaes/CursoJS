function Carro ( velMax = 200, acel = 10, red = 5){
    let velAtual = 0

    this.acelerar = function(){
        if(velAtual + acel <= velMax){
            velAtual += acel
        }else{
            return velMax
        }

        this.reduzir = function(){
            velAtual -= red
        }

        this.getVel = function(){
            console.log(`A velocidade atual é de ${velAtual}`)
        }
    }
}

const palio = new Carro(200, 15, 8)
palio.acelerar()
palio.acelerar()
palio.acelerar()
palio.reduzir()
palio.getVel()
