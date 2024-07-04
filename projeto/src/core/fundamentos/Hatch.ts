import Carro from "./Carro";

export default class Hatch implements Carro {
    constructor(
        readonly velocidadeMaxima: number = 200,
        private  _velocidadeAtual: number = 1
    ) {}

    acelerar(): void {
        this._velocidadeAtual = Math.min(this._velocidadeAtual + 15, this.velocidadeMaxima)
    }

    frear(): void {
        this._velocidadeAtual = Math.max(this._velocidadeAtual - 15, 0)
    }

    get velocidadeAtual(): number {
        return this._velocidadeAtual
    }

}