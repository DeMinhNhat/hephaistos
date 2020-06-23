import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import { booksReducer } from '../reducers'

export const BooksContext = createContext()

const initialStore = {
  books: [],
}

const BooksContextProvider = props => {
  const [state, dispatch] = useReducer(booksReducer, initialStore)
  return (
    <BooksContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  )
}

BooksContextProvider.propTypes = {
  children: PropTypes.object,
}

export default BooksContextProvider
