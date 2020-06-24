import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import BookDetail from '../BookDetail'
import { BooksContext } from '../../contexts'
import { BookListWrapper } from './BookList.styled'

const BookList = () => {
  const { state } = useContext(BooksContext)
  const { books } = state

  console.log('render BookList'); // eslint-disable-line

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
