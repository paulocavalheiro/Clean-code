import Carro from "./Carro";

export default class Sedan implements Carro {
    constructor(
        readonly velocidadeMaxima: number = 150,
        private  _velocidadeAtual: number = 1
    ) {}

    acelerar(): void {
        this._velocidadeAtual = Math.min(this._velocidadeAtual + 10, this.velocidadeMaxima)
    }

    frear(): void {
        this._velocidadeAtual = Math.max(this._velocidadeAtual - 10, 0)
    }

    get velocidadeAtual(): number {
        return this._velocidadeAtual
    }

}