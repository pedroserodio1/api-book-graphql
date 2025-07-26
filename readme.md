# Projeto GraphQL com Prisma   
Este projeto é um servidor GraphQL que utiliza o Prisma para gerenciar um banco de dados SQLite. O servidor possui resolvers para consultas de livros e autores, além de mutações para criar novos livros e autores.
## Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)
- SQLite (para o banco de dados)
## Instalação
1. Clone o repositório:
```bash
git clone <https://github.com/pedroserodio1/api-book-graphql.git>
``` 
2. Navegue até o diretório do projeto:
```bash 
cd api-book-graphql
```
3. Instale as dependências:
```bash
npm install
```
## Configuração do Prisma
O Prisma é utilizado para interagir com o banco de dados SQLite. Certifique-se de que o arquivo `prisma/schema.prisma` está configurado corretamente com o modelo de dados e a conexão com o banco de dados.
## Executando o Servidor
Para iniciar o servidor GraphQL, execute o seguinte comando:
```bash
npm run dev
```
O servidor será iniciado na porta 4000 por padrão. Você pode acessar o playground GraphQL em `http://localhost:4000`.
## Consultas e Mutações
O servidor possui os seguintes resolvers:
- **Query**:
    - `books`: Retorna uma lista de todos os livros.
    - `authors`: Retorna uma lista de todos os autores.
    - `author(id: ID!)`: Retorna um autor específico pelo ID.
- **Mutation**:
    - `createBook(title: String!, authorId: ID!)`: Cria um novo livro recebendo o título e o ID do autor, retornando o livro criado.
    - `createAuthor(name: String!)`: Cria um novo autor recebendo o nome, retornando o autor criado.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests no repositório.
## Dependências
- `@apollo/server`: Para criar o servidor GraphQL.
- `@prisma/client`: Cliente Prisma para interagir com o banco de dados.
- `prisma`: Ferramenta de migração e geração de código do Prisma.
- `graphql`: Biblioteca para trabalhar com GraphQL.
- `sqlite3`: Driver SQLite para o Prisma.
## Estrutura do Projeto
O projeto possui a seguinte estrutura de diretórios:
```
api-book-graphql/
├── src/
│   ├── db/
│   │   └── prisma.ts         # Configuração do Prisma
│   ├── graphql/
│   │   ├── resolver.ts       # Resolvers GraphQL
│   │   └── schema.ts          # Definição do schema GraphQL
│   └── index.ts               # Ponto de entrada do servidor
├── prisma/
│   └── schema.prisma          # Modelo de dados do Prisma
├── package.json               # Dependências e scripts do projeto
├── tsconfig.json              # Configuração do TypeScript
└── README.md                  # Documentação do projeto
```
## Instruções Adicionais
- Certifique-se de que o banco de dados SQLite está configurado corretamente no arquivo `prisma/schema.prisma`.
- Para adicionar novos modelos ou modificar os existentes, edite o arquivo `prisma/schema.prisma` e execute o comando `npx prisma migrate dev` para aplicar as alterações no banco de dados.
## Conclusão
Este projeto foi desenvolvido como uma introdução ao GraphQL e ao Prisma, com o objetivo de entender como criar um servidor GraphQL básico com resolvers e mutações, além de interagir com um banco de dados SQLite usando o Prisma. Através deste projeto, foi possível aprender os conceitos fundamentais do GraphQL, como consultas e mutações, bem como a configuração e uso do Prisma para gerenciar o banco de dados. Espera-se que este projeto sirva como base para projetos futuros mais complexos, onde o conhecimento adquirido possa ser aplicado e expandido. Agradecemos por acompanhar este projeto e esperamos que ele seja útil para quem está iniciando no mundo do GraphQL e do Prisma.

