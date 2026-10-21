import { Router } from "express";
//importação padrão
import xuxa from '../database/functions.js'
import usuarios from '../database/usuarios.js'
//importar separado
import { fatorial, soma } from "../database/functions.js";
//importar de arquivo json
import jogos from '../database/jogos.json' with {type:"json"}



const basicRoute = Router()

//rotas
basicRoute.get("/",(req,res)=>{
    res.send(`
            <h1>servidor ok</h1>
            <p>Seja bem-vindo</p>
        `)
})

basicRoute.get("/sobre",(req,res)=>{
    res.status(200).json(xuxa)
})

basicRoute.get("/fatorial/:n",(req,res)=>{
    const num = parseInt(req.params.n)
    const fat = fatorial(num)
    res.send(`
        <b>fatorial de ${num}:</b> ${fat}
        `)

})




//no final, exporta
export default basicRoute