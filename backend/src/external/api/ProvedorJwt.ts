import jwt from "jsonwebtoken";
export default class ProvedorJwt {
  constructor(private segredo: string) {}

  gerar(token: string | object): string {
    
    return jwt.sign(token, this.segredo, {
      expiresIn: "1d",
    });
  }
}
