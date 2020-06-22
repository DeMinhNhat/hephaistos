import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { BooksContext } from '../../contexts'
import { BookDetailWrapper } from './BookDetail.styled'

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BooksContext)
  return (
    <BookDetailWrapper>
      <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}> {/* eslint-disable-line */}
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </li>
    </BookDetailWrapper>
  )
}

BookDetails.propTypes = {
  book: PropTypes.object,
}

export default BookDetails
