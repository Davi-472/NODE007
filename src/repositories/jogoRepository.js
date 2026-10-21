import jogos from '../database/jogos.json' with {type:'json'}
import fs from 'fs'


export function readAll(){
    return jogos
}

export function readPriceBetween(min, max){
    const dados = jogos.filter((j)=> j.preco>=min && j.preco<=max)
    return dados
}

export function readById(id){
    const jogo = jogos.find((j)=>j.id==id)
    return jogo
}

export function create(jogo){

       /*
       jogo = {
            "id": ?,
            "nome": "minecraft",
            "plataformas": ["xbox one", "ps5", "pc"],
            "preco": 100.99
        }
       */
        const newId = jogos[jogos.length -1].id + 1  
        jogo.id = newId
        jogos.push(jogo)
        //alterar o arquivo texto permanente
        fs.writeFileSync(
            './src/database/jogos.json',
            JSON.stringify(jogos),
            'utf-8'
        )



        return {
            msg:"jogo inserido com sucesso",
            data: jogo
        }
}
export function update(jogo){
    return null
}
export function del(id_jogo){
    return null
}