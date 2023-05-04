
function adicionar(){
    let num = document.getElementById('numero');
    let tab = document.getElementById('tabela');

    if(num.value.length == 0){
        alert('Preencha o campo com algum numero!')
    }else{
        let n = Number(num.value);
        tab.innerHTML = '';
        n
    }

}