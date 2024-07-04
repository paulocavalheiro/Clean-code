import TerminalUtils from "src/utils/TerminalUtil";
import registrar from "../usuario/registrar";


export default async function menuUsuario() {
  TerminalUtils.titulo("MENU PRINCIPAL");

  const [indice] = await TerminalUtils.menu([
    "1. Registrar Usuário",
    "3. Voltar",
  ])

  switch (indice) {
    case 0:
      await registrar();
      break;
    default:
      return;
  }

  await menuUsuario();
}
