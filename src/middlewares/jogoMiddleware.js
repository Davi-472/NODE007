export function midMinMax(req, res, next) {
    const min = parseFloat(req.query.min)
    const max = parseFloat(req.query.max)
    //console.log(min,max)
    if (!isNaN(min) && !isNaN(max)) {
        return next()
    }
    res.status(401).json({
        errors: [
            "Os valores min e max devem ser numéricos"
        ]
    })
}

export function midGetById(req, res, next) {
    const id = req.params.id
    const errors = []
    if(isNaN(parseInt(id))) {
        errors.push("O id deve ser um número inteiro")
    }
    if(id<=0) {
        errors.push("O id deve ser maior que zero")
    }
    if(errors.length==0) {
        return next()
    }
    res.status(401).json({
        errors: errors
    })
}

export function validate(req, res, next){

    const dados = req.body
    const errors = []

    /*
        "nome": "Monster Hunter Rise",
        "plataformas": ["ps5", "xbox one", "pc"],
        "preco": 149.90
    */

        if(dados.nome == ""){
            errors.push("Nome é obrigatório")
        }
        if(dados.plataformas.length ==0){
            errors.push("Uma plataforma deve ser informada")
        }
        if(isNaN(parseFloat(dados.preco))){
            errors.push("O preço deve ser numérico")
        }
        if(dados.preco < 0){
            errors.push("O preço deve ser maior ou igual a 0")
        }

        if(errors.length == 0){
            return next()
        }else{
            res.status(401).json({
                error:true,
                errors:errors
            })
        }


}