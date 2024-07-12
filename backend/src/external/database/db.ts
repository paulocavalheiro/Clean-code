import pgPromise from "pg-promise"

const pgp = pgPromise()
const db = pgp({
    host: 'localhost',
    port: Number(5432),
    database: 'clean_arch',
    user: 'postgres',
    password: 'admin',
})

export default db
