import prisma from "../db/prisma";

export const resolvers = {
  Query: {
    books: () => prisma.book.findMany(),
    authors: () => prisma.author.findMany(),
    author: (_: any, { id }: { id: string }) => prisma.author.findUnique({ where: { id } }),
  },

  Mutation: {
    //_: any serve para indicar que o primeiro parâmetro não será usado
    createAuthor: async (_: any, { name }: any) => {
      // Usa o prisma.author.create para criar um novo registro no banco
      return prisma.author.create({
        data: { name },
      });
    },
    createBook: async (_: any, { title, authorId }: any) => {
      // Usa o prisma.book.create para criar um novo livro e conecta ao autor
      return prisma.book.create({
        data: {
          title,
          author: {
            connect: { id: authorId },
          },
        },
      });
    },
  },

  Book: {
    author: (book: any) => prisma.author.findUnique({ where: { id: book.authorId } }),
  },
  Author: {
    books: (author: any) => prisma.book.findMany({ where: { authorId: author.id } }),
  },
};
