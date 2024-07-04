import ProvedorCriptoGrafia from "@/core/usuario/service/ProvedorCriptoGrafia";

export default class EspacoSenha implements ProvedorCriptoGrafia {

    criptografar(senha: string): string {
        return senha.split("").join(" ")
    }
}