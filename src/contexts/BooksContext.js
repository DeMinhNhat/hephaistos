import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import { booksReducer } from '../reducers'

export const BooksContext = createContext()

const initialStore = {
  books: [],
  book: {},
}

const BooksContextProvider = props => {
  const [state, dispatch] = useReducer(booksReducer, initialStore)
  console.log('render BooksContextProvider') // eslint-disable-line
  return (
    <BooksContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  )
}

BooksContextProvider.propTypes = {
  children: PropTypes.array,
}

export default BooksContextProvider
