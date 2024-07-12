import bcrypt from "bcrypt";

export default class Bcrypt {
  criptografar(senha: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(senha, salt);
  }

  comparar(senha: string, senhaCripto: string): boolean {
    return bcrypt.compareSync(senha, senhaCripto);
  }
}
