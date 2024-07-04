import ProvedorCriptoGrafia from "src/core/usuario/service/ProvedorCriptoGrafia"

export default class InverterSenha implements ProvedorCriptoGrafia {
    criptografar(senha: string): string {
        const senhaCripto = senha
            .split("")
            .reverse()
            .join("")
        return senhaCripto
    }
}
