let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComtHisArrow = param => console.log(this === param)
comparaComtHisArrow(global)
comparaComtHisArrow(module.exports)

comparaComtHisArrow = comparaComtHisArrow.bind(obj)
comparaComtHisArrow(obj)
comparaComtHisArrow(module.exports)