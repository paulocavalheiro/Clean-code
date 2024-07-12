export default interface ProvedorCriptoGrafia {
    criptografar(senha: string): string
    comparar(senha: string, senhaCripto: string): boolean
}