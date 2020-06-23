import React, { useContext } from 'react'
import BookDetail from '../BookDetail'
import { BooksContext } from '../../contexts'
import { BookListWrapper } from './BookList.styled'

const BookList = () => {
  const { books } = useContext(BooksContext)
  console.log('render BookList') // eslint-disable-line
  return books.length > 0
    ? (
      <BookListWrapper>
        <ul>
          {books.map(book => (<BookDetail book={book} key={book.id} />))}
        </ul>
      </BookListWrapper>
    )
    : (<BookListWrapper>No books to read. Hello free time:)</BookListWrapper>)
}

export default BookList
