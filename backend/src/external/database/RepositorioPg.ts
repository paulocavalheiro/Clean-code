import Usuario from "./../../core/usuario/model/usuario"
import db from "./db"

export default class RepositorioPg {
    async inserir(usuario: Usuario) {
        await db.query(
            "INSERT INTO usuarios (id,nome, email, senha) VALUES ($1, $2, $3, $4)",
            [
                usuario.id,
                usuario.nome,
                usuario.email,
                usuario.senha,
            ]
        )
    }
    async buscarPorEmail(email: string) {
        const usuario = await db.oneOrNone(
            'SELECT * FROM usuarios WHERE email = $1',
            [email]
        )
        if(!usuario) {  
            return null
        }else return usuario

    }
}
