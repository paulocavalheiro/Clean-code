import Hatch from "@/core/fundamentos/Hatch";
import Sedan from "@/core/fundamentos/Sedan";
import Carro from "src/core/fundamentos/Carro";
import corrida from "src/core/fundamentos/corrida";
import TerminalUtils from "src/utils/TerminalUtil";
import { terminal } from "terminal-kit";

export default async function dip() {
    TerminalUtils.titulo("DIP");

    const [tipo] = await TerminalUtils.selecao("Qual o tipo do carro?", [
      "Hatch",
      "Sedan",
    ]);

    let carro: Carro = new Hatch();

    switch (tipo) {
      case 0:
        carro = new Hatch();
        break;
      case 1:
        carro = new Sedan();
        break;
    }

    corrida(carro,terminal.green);
    await TerminalUtils.getEnter();
    
}