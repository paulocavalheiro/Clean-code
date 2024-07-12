create extension if not exists "uuid-ossp"

create table usuarios(
    id uuid PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
)

