import Usuario from "./../../core/usuario/model/usuario"

export default class RepositorioUsuario {
    private static readonly items: Usuario[] = []
    async inserir(usuario: Usuario) {
        const items: any[] = RepositorioUsuario.items.push(
            usuario
        ) as any
        const usuarioEncontrado = await this.buscarPorEmail(
            usuario.email
        )
        if (usuarioEncontrado) {
            return usuarioEncontrado
        } else {
            items.push(usuario)
        }
    }

    async buscarPorEmail(
        email: string
    ): Promise<Usuario | null> {
        const items = RepositorioUsuario.items
        return (
            items.find((item) => item.email === email) ??
            null
        )
    }
}
