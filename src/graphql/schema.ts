import {gql} from 'graphql-tag';

export const typeDefs = gql`
    type Book{
        id: ID!
        title: String!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        books: [Book!]!
    }
    type Query {
        books: [Book!]!
        authors: [Author!]!
        author(id: ID!): Author
    }  

    type Mutation {
        # cria um novo livro recebendo o título e o ID do autor
        # retorna o livro criado
        createBook(title: String!, authorId: ID!): Book!

        # cria um novo autor recebendo o nome
        # retorna o autor criado
        createAuthor(name: String!): Author! 
    }
    `