import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/usuario";
import RepositorioUsuario from "./RepositorioUsuario";
import Erros from "@/core/shared/Erros";
import ProvedorCriptoGrafia from "./ProvedorCriptoGrafia";

export interface EntradaLogin {
  email: string;
  senha: string;
}

export interface SaidaLogin {
  usuario: Usuario;
  token: string;
}

export default class LoginUsuario
  implements CasoDeUso<EntradaLogin, Usuario>
{
  constructor(
    private respositorio: RepositorioUsuario,
    private provedorCripto: ProvedorCriptoGrafia
  ) {}
  async executar(entrada: EntradaLogin): Promise<Usuario> {
    const usuarioExistente = await this.respositorio.buscarPorEmail(
      entrada.email
    );

    if (!usuarioExistente) {
      throw new Error(Erros.USUARIO_NAO_EXISTE);
    }

    const mesmaSenha = this.provedorCripto.comparar(
      entrada.senha,
      usuarioExistente.senha!
    );

    if (!mesmaSenha) {
      throw new Error(Erros.SENHA_INCORRETA);
    }

    return { ...usuarioExistente, senha: undefined };
  }
}
