import gql from 'graphql-tag'

export const GET_BOOKS = gql`
  query {
    books {
      id
      name
      genres
      author {
        phone
        name
      }
    }
  }
`

export const GET_BOOK = gql`
  query book($bookId: ID!) {
    book(bookId: $bookId) {
      name
      genres
      author {
        id
        phone
        name
      }
    }
  }
`

export const ADD_BOOK = gql`
  mutation addBook(
    $genres: [String!]
    $name: String!
    $authorId: ID
  ) {
    addBook(genres: $genres, name: $name, authorId: $authorId) {
      id
      genres
      name
    }
  }
`

export const SUBSCRIPTIONS_ADD_BOOK = gql`
  subscription autoAddBook {
    autoAddBook {
      id
      genres
      name
      author {
        phone
        name
      }
    }
  }
`
