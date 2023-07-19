function bissexto(ano){
    if(ano % 4 == 0 && ano % 100 !== 0 && ano){
        return true
    }else{
        return false
    }
}

console.log(bissexto(2000))
console.log(bissexto(2020))
console.log(bissexto(2100))