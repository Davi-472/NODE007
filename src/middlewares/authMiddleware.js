import jwt from 'jsonwebtoken';

export function auth(req,res,next){
    const token = req.headers.authorization;
    
    try{
        const valid = jwt.verify(token,process.env.JWT_SECRET)
        next()
    }catch(e){
      res.status(401).json({
        ok:false,
        msg:'TOKEN INVÁLIDO'   
    })
    }
}