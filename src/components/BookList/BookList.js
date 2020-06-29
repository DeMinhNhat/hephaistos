import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// import { useParams } from 'react-router'
import { FormattedMessage } from 'react-intl'
import { useQuery } from '@apollo/react-hooks'
import { BooksContext } from '../../contexts'
import { ACTION_TYPES } from '../../utils/constants'
import {
  GET_BOOKS,
} from '../../graphql/Books'
import { BookListWrapper } from './BookList.styled'

const BookList = () => {
  const { state, dispatch } = useContext(BooksContext)
  const { books } = state
  const history = useHistory()
  // const { bookId } = useParams()
  const { data } = useQuery(GET_BOOKS)

  useEffect(() => {
    if (data && data.books.length > 0) {
      dispatch({ type: ACTION_TYPES.GET_BOOKS, books: data.books })
    }
  }, [data]) // eslint-disable-line

  return books.length > 0 ? (
    <BookListWrapper>
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => history.push(`/books/${book.id}`)}>  {/* eslint-disable-line */}
            <div className="title">{book.name}</div>
          </li>
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
