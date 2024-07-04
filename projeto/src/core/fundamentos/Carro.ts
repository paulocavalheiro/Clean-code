export default interface Carro {
  readonly velocidadeMaxima: number;
  readonly velocidadeAtual: number;
  acelerar(): void;
  frear(): void;
}
