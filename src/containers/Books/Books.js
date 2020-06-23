import React from 'react'
import Navbar from '../../components/Navbar'
import BookList from '../../components/BookList'
import NewBookForm from '../../components/NewBookForm'
import BookContextProvider from '../../contexts/BooksContext'

const Books = () => (
  <>
    <BookContextProvider>
      <Navbar />
      <BookList />
      <NewBookForm />
    </BookContextProvider>
  </>
)

Books.propTypes = {}

export default Books
