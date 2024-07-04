import TerminalUtils from "src/utils/TerminalUtil";
import menuFundamentos from "./menuFundamentos";
import menuUsuario from "./menuUsuario";

export default async function menuPrincipal() {
  TerminalUtils.titulo("MENU PRINCIPAL");

  const [indice] = await TerminalUtils.menu(["1. Fundamentos", "2. Sair"]);    

  switch (indice) {
    case 0:
      await menuFundamentos();
      break;
    case 1:
      await menuUsuario();
      break;
    default:
      return process.exit(0);
  }
  menuPrincipal();
}
