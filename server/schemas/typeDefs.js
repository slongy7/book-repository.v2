const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: String
        savedBooks: [Book]!
    }

    type Book {
        bookId: String
        bookAuthors: [String]!
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        book: Book
        user: User
    }
    input bkInput{
        authors: [String], description: String, image: String, link: String, title: String, bookId: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookInfo: bkInput): User
        removeBook(bookId: String): User
    }

    `;

module.exports = typeDefs;