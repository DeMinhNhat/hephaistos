import React, { useReducer, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import BookList from '../../components/BookList'
import NewBookForm from '../../components/NewBookForm'
import { booksReducer } from './booksReducer'
import { BooksContext } from '../../contexts'

const BookContextProvider = () => {
  const [books, dispatch] = useReducer(booksReducer, [], () => {
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : []
  })
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      <Navbar />
      <BookList />
      <NewBookForm />
    </BooksContext.Provider>
  )
}

export default BookContextProvider
