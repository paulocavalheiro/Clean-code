import { Request, Response, NextFunction } from "express";
import ProvedorJwt from "./ProvedorJwt";
import Usuario from "@/core/usuario/model/usuario";
import RepositorioUsuario from "@/core/usuario/service/RepositorioUsuario";

export default function UsuarioMiddleware(repositorio: RepositorioUsuario) {
  return async (req: Request, resp: Response, next: NextFunction) => {
    const acesssoNegado = () => resp.status(403).send("Token invalido");

    const token = req.headers.authorization?.replace("Bearer", "");

    if (!token) {
      acesssoNegado();
      return;
    }

    const provedorJtw = new ProvedorJwt("jwtSecret123");

    const usuarioToken = provedorJtw.obter(token) as Usuario;

    const usuario = repositorio.buscarPorEmail(usuarioToken.email);

    if (!usuario) {
      acesssoNegado();
      return;
    }

    (req as any).usuario = usuario;

    next();
  };
}
