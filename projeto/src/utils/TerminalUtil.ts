import { terminal } from "terminal-kit"

export default class TerminalUtils {
    static titulo(texto: string) {
        terminal.clear()
        terminal.magenta(`${texto}\n`)
        terminal.magenta(`=`.repeat(texto.length) + `\n`)
    }

    static limpar() {
        terminal.clear()
    }

    static async selecao(
        texto: string,
        opcoes: string[]
    ): Promise<[number, string]> {
        terminal.yellow(`${texto}\n`)
        const resp = await terminal.singleLineMenu(opcoes)
            .promise
        return [resp.selectedIndex, resp.selectedText]
    }

    static async menu(
        opcoes: string[]
    ): Promise<[number, string]> {
        const resposta = await terminal.singleColumnMenu(
            opcoes
        ).promise
        return [
            resposta.selectedIndex,
            resposta.selectedText,
        ]
    }

    static exibirChaveValor(chave: string, valor: any) {
        terminal.yellow(chave).green(valor).white("\n")
    }

    static async confimar(texto: string): Promise<boolean> {
        terminal.yellow(`${texto}\n`)
        const resp = await terminal.singleLineMenu([
            "Sim",
            "Nao",
        ]).promise
        return resp.selectedIndex === 0
    }

    static async getEnter(): Promise<void> {
        terminal.white("\n Pressione enter para continuar")
        await terminal.inputField().promise
    }

    static async campoRequerido(
        label: string | undefined,
        valorPadrão: string = ""
    ): Promise<string> {
        terminal.yellow(`\n${label}`)
        const valor = await terminal.inputField({
            default: valorPadrão,
        }).promise
      if(valor) return valor
      return TerminalUtils.campoRequerido(label, valorPadrão)
    }

    static async sucesso (texto: string) {
        terminal.green(texto)
    }

    static async erro (texto: string) {
        terminal.red(texto)
    }

}
