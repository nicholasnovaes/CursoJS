

function contar(){
    var ini = document.getElementById('iniciotxt');
    var fim = document.getElementById('fimtxt');
    var pas = document.getElementById('passotxt');
    var res = document.getElementById('res');

    
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length ==0){
        alert('[ERRO] Preencha todos os campos!');
    }else{
        res.innerHTML = 'Contando:'
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(pas.value);

        if(p <= 0){
            alert['Passo invalido']
            p = 1
        }

        if(i < f){
            //Contaem crescente
            for(var x = i; x <= f; x += p){
                res.innerHTML += x + ' ';
                }
        }else{
            //Contagem decrescente
            for(var c = i; c >= f;c -= p){
                res.innerHTML += c + ' '; 
            }
        }        
    }
    
    
    
}