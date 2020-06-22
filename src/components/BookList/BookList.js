import React, { useContext } from 'react'
import BookDetail from '../BookDetail'
import { BooksContext } from '../../contexts'

const BookList = () => {
  const { books } = useContext(BooksContext)
  return books.length > 0
    ? (
      <div className="book-list">
        <ul>
          {books.map(book => (<BookDetail book={book} key={book.id} />))}
        </ul>
      </div>
    )
    : (<div className="empty">No books to read. Hello free time:)</div>)
}

export default BookList