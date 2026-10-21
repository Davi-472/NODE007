import {Router} from 'express'
import { getAllGame, getByPrice,getById ,setNewGame } from '../controller/jogoController.js'
import { midMinMax,midGetById,validate } from '../middlewares/jogoMiddleware.js'
import { auth } from '../middlewares/authMiddleware.js'

const jogoRoute = Router()

jogoRoute.get('/jogos',auth,getAllGame)
//usando paramns
//jogoRoute.get('/jogos/preco_entre/:min/:max',midMinMax , getByPrice)

//usando query
jogoRoute.get('/jogos/preco_entre', midMinMax, getByPrice)
jogoRoute.get('/jogos/:id', midGetById, getById)
jogoRoute.post('/jogos/create',validate,setNewGame)

export default jogoRoute