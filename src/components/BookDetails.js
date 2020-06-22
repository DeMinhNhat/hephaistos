import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext)
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}> {/* eslint-disable-line */}
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  )
}

BookDetails.propTypes = {
  book: PropTypes.object,
}

export default BookDetails
