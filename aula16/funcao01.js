
function parimpar(n){
    if(n % 2 === 0){
        return 'par'
    }else{
        return 'impar'
    }
}

let num = parimpar(7);
console.log(num)