import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { useQuery } from '@apollo/react-hooks'
import { BooksContext } from '../../contexts'
import {
  GET_BOOKS,
} from '../../graphql/Books'
import BookDetail from '../BookDetail'
import { BookListWrapper } from './BookList.styled'

const BookList = () => {
  const { state } = useContext(BooksContext)
  const { books } = state
  const { loading, error, data } = useQuery(GET_BOOKS) // eslint-disable-line

  console.log('render BookList', data); // eslint-disable-line

  return books.length > 0 ? (
    <BookListWrapper>
      <ul>
        {books.map(book => (
          <BookDetail book={book} key={book.id} />
        ))}
      </ul>
    </BookListWrapper>
  ) : (
    <BookListWrapper>
      <FormattedMessage
        id="common.noBooks"
        defaultMessage="No books to read. Hello free time:)"
      />
    </BookListWrapper>
  )
}

export default BookList
