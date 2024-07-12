import { Express } from "express";
import LoginUsuario from "@/core/usuario/service/LoginUsuario";
import ProvedorJwt from "./ProvedorJwt";

export default class LoginUsuarioController {
  constructor(servidor: Express, casoDeUso: LoginUsuario) {
    const jwtProv = new ProvedorJwt("jwtSecret123")
    servidor.post("/api/usuarios/login", async (req, resp) => {
      try {
        const usuario = await casoDeUso.executar({
          email: req.body.email,
          senha: req.body.senha,
        });
        resp.status(200).send({
          usuario,
          token: jwtProv.gerar(usuario),
        });
      } catch (erro: any) {
        resp.status(400).send(erro.message);
      }
    });
  }
}
