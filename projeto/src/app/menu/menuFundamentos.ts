import TerminalUtils from "src/utils/TerminalUtil";
import polimorfismo from "../fundamentos/polimorfismo";
import dip from "../fundamentos/dip";


export default async function menuFundamentos() {
  TerminalUtils.titulo("MENU PRINCIPAL");

  const [indice] = await TerminalUtils.menu([
    "1. Polimorfismo",
    "2. DIP",
    "3. Voltar",
  ])

  switch (indice) {
    case 0:
      await polimorfismo();
      break;
    case 1:
      await dip();
      break;
    default:
      return;
  }

  await menuFundamentos();
}
