function Carro(velMax = 300, delta = 10, omega = 5){
    let velAtual = 0

    this.acelerar = function(){
        if(velAtual + delta <= velMax){
            velAtual += delta
        }else{
            velAtual = velMax
        }
    }

    this.reduzir = function(){
        velAtual -= omega
    }

    this.velAcelerado = function() {
        return velAtual
    }
}

const fluence = new Carro(200, 50)
fluence.acelerar()
fluence.reduzir()
console.log(fluence.velAcelerado())