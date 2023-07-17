function maiorQue(num1, num2){
    if(num1 == num2 || num1 < num2){
        return console.log(false)
    }else if(num1 > num2){
        return console.log(true)
    }
}

maiorQue(0,0)
maiorQue(1,0)
maiorQue(0,1)
maiorQue(0,"0")
