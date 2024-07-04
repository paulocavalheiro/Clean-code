
import CasoDeUso from "src/core/shared/CasoDeUso"
import Erros from "src/core/shared/Erros"
import Id from "@/core/shared/Id"
import ProvedorCriptoGrafia from "./ProvedorCriptoGrafia"
import RepositorioUsuario from "./RepositorioUsuario"
import Usuario from "../model/usuario"

export default class RegistroUsuario implements CasoDeUso<Usuario, void> {
    constructor(
        private repositorio: RepositorioUsuario,
        private provedorCripto: ProvedorCriptoGrafia
    ) {}

    async executar(usuario: Usuario): Promise<void> {
        const senhaCripto = this.provedorCripto.criptografar(usuario.senha)
        const usuarioEncontrado =
            await this.repositorio.buscarPorEmail(usuario.email)
        if (usuarioEncontrado) {
            throw new Error(Erros.USUARIO_JA_EXISTE)
        }

        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto,
        }

        this.repositorio.inserir(novoUsuario)

        console.log(novoUsuario)

    }
}
