import {readUser} from '../repositories/authRepository.js'
import jwt from 'jsonwebtoken'


export function login(req,res){
  
    const email = req.body.email
    const senha = req.body.senha


    console.log(email,senha)
    //pega do banco
    const user = readUser(email,senha)
    if(user){

        const user_no_pass = {
                id:user.id,
                nome:user.nome,
                email:user.email
            } 
        const token = jwt.sign(
            user_no_pass,
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        )

        res.status(200).json({
            ok:true,
            msg:"Usuário Logado Com Sucesso!",
            user:user_no_pass,
            token:token
        })
    }else{
        res.status(401).json({
            ok:false,
            msg:"Credenciais incorretas"
        })
    }

}