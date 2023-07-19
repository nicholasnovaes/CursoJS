let nums = [1, 2, 3, 4, 5]
let nums1 = [0, 10]

function media(array){
    let resultado = array.reduce(function(acumulador, atual){
        return acumulador + atual
    })

    let media = (resultado / array.length)
    return console.log(media)
}

media(nums)
media(nums1)