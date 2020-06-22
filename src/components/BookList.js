import React, { useContext } from 'react'
import BookDetails from './BookDetails'
import { BookContext } from '../contexts/BookContext'

const BookList = () => {
  const { books } = useContext(BookContext)
  return books.length > 0
    ? (
      <div className="book-list">
        <ul>
          {books.map(book => (<BookDetails book={book} key={book.id} />))}
        </ul>
      </div>
    )
    : (<div className="empty">No books to read. Hello free time:)</div>)
}

export default BookList
