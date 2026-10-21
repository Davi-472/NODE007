//importação de pacote
import express from 'express' 
import basicRoute from './routes/basicRoute.js'
import jogoRoute from './routes/jogoRoute.js'
import authRoute from './routes/authRoute.js' 
import cors from 'cors'


const port = process.env.PORT

//criando o aplicativo
const app = express()
app.use(cors()) //liberar acesso dos fronts ao meu back
app.use(express.json()) //faz o parse das informações para json

//usando as rotas
app.use(basicRoute)
app.use(jogoRoute)
app.use(authRoute)

//rodar o servidor
app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`)
})


