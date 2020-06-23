import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { BooksContext } from '../../contexts'

const BookDetail = ({ book }) => {
  const { dispatch } = useContext(BooksContext)
  console.log('render BookDetail') // eslint-disable-line
  return (
    <>
      <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>  {/* eslint-disable-line */}
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </li>
    </>
  )
}

BookDetail.propTypes = {
  book: PropTypes.object,
}

export default BookDetail
