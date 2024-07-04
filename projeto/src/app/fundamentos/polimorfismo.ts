import Sedan from "src/core/fundamentos/Sedan"
import Carro from "src/core/fundamentos/Carro"
import Hatch from "src/core/fundamentos/Hatch"
import TerminalUtils from "src/utils/TerminalUtil"

export default async function polimorfismo() {
    TerminalUtils.titulo("POLIMORFISMO")

    const [tipoCarro] = await TerminalUtils.selecao(
        "Qual o tipo do carro?",
        ["Hatch", "Sedan"]
    )

    const carro: Carro =
        tipoCarro === 0 ? new Hatch() : new Sedan()

    while (true) {
        TerminalUtils.limpar()
        TerminalUtils.exibirChaveValor(
            "Velocidade Maxima ",
            carro.velocidadeMaxima
        )
        TerminalUtils.exibirChaveValor(
            "Velocidade Atual ",
            `${carro.velocidadeAtual} km/h`
        )

        const [opcao] = await TerminalUtils.selecao(
            "Selecione uma opcao",
            ["Acelerar", "Frear"]
        )

        opcao === 0 ? carro.acelerar() : carro.frear()

        const continuar = await TerminalUtils.confimar(
            "Deseja continuar"
        )
        if (!continuar) return
    }
}
