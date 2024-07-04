import { terminal } from "terminal-kit";
import Carro from "./Carro";

type Logger = (str: string) => void;

export default function corrida(carro: Carro, logger: Logger) {

  Array.from({ length: 10 }).forEach(() => {
    carro.acelerar();
    logger(`\n Velocidade ${carro.velocidadeAtual}`);
  });

  Array.from({ length: 10 }).forEach(() => {
    carro.frear();
    logger(`\n Velocidade ${carro.velocidadeAtual}`);
  });

}
