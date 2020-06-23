import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { BooksContext } from '../../contexts'
import { BookDetailWrapper } from './BookDetail.styled'

const BookDetail = ({ book }) => {
  const { dispatch } = useContext(BooksContext)
  console.log('render BookDetail')
  return (
    <BookDetailWrapper>
      <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}> {/* eslint-disable-line */}
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </li>
    </BookDetailWrapper>
  )
}

BookDetail.propTypes = {
  book: PropTypes.object,
}

export default BookDetail
