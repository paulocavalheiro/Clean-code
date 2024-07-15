import express from 'express'
import Bcrypt from './external/auth/Bcrypt'
import RepositorioPg from './external/database/RepositorioPg'
import RegistroUsuario from './core/usuario/service/RegistroUsuario'
import RegistrarUsuarioController from './external/api/RegistrarUsuarioController'
import LoginUsuario from './core/usuario/service/LoginUsuario'
import LoginUsuarioController from './external/api/LoginUsuarioController'

const app = express()
const porta = 4000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(porta, () => console.log(`Servidor iniciado na porta ${porta}`))

// ----------------------------------------------- //
const repositorioUsuario = new RepositorioPg()
const provedorCripto = new Bcrypt()

const registroUsuario = new RegistroUsuario(
    repositorioUsuario,
    provedorCripto
)

const loginUsuario = new LoginUsuario(
    repositorioUsuario,
    provedorCripto
)

new RegistrarUsuarioController(app, registroUsuario)
new LoginUsuarioController(app, loginUsuario)

