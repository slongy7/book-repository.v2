import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $passsword: String!) {
        login(email: $email, password: $passsword) {
            token
            user {
                _id
                username
            }
        }
    }`;

    export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`;

    export const SAVE_BOOK = gql`
        mutation saveBook($bookInfo: bkInput) {
            saveBook(bookInfo: $bookInfo) {
            _id
            name
            savedBooks
        }
    }`;

    export const REMOVE_BOOK = gql`
        mutation removeBook($book: String!) {
            removeBook(book: $book) {
                _id
                name
                savedBooks
            }
        }`;