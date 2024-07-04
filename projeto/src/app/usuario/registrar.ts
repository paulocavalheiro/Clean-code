import RegistroUsuario from "@/core/usuario/service/RegistroUsuario"
import TerminalUtils from "src/utils/TerminalUtil"
import Usuario from "@/core/usuario/model/usuario"
import Bcrypt from "@/adapter/auth/Bcrypt"
import RepositorioUsuario from "@/adapter/database/RepositorioUsuario1"
import RepositorioPg from "@/adapter/database/RepositorioPg"


export default async function registrar() {
    TerminalUtils.titulo("REGISTRAR USUARIO")

    const nome = await TerminalUtils.campoRequerido(
        "Nome:",
        "Paulo Henrique"
    )
    const email = await TerminalUtils.campoRequerido(
        "Email:",
        "paulo@.com"
    )
    const senha = await TerminalUtils.campoRequerido(
        "Senha:"
    )

    const usuario: Usuario = {
        nome,
        email,
        senha,
    }
    try {
        const repositorio = new RepositorioPg()
        const provedorCripto = new Bcrypt()
        const casoDeUso = new RegistroUsuario(
            repositorio,
            provedorCripto
        )

        await casoDeUso.executar(usuario)
    } catch (error) {
        TerminalUtils.erro('error ao cadastrar')
    } finally {
        TerminalUtils.getEnter()
    }    

    TerminalUtils.sucesso(
        "\n Usuario registrado com sucesso"
    )

    await TerminalUtils.getEnter()
}
