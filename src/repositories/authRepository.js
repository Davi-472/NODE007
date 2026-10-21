import usuarios from '../database/usuarios.js'

export function readUser(email,senha){
    const user = usuarios.find((u)=>u.email==email && u.senha==senha)
    return user
}