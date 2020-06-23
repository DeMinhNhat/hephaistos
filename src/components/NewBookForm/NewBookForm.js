import React, { useContext, useState } from 'react'
import { BooksContext } from '../../contexts'
import { NewBookFormWrapper } from './NewBookForm.styled'

const NewBookForm = () => {
  const { dispatch } = useContext(BooksContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'ADD_BOOK', book: { title, author } })
    setTitle('')
    setAuthor('')
  }

  console.log('render NewBookForm') // eslint-disable-line

  return (
    <NewBookFormWrapper onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="author name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book" />
    </NewBookFormWrapper>
  )
}

export default NewBookForm
