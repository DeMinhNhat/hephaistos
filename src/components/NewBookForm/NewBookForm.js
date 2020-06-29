import React, { useContext, useState } from 'react'
import { useIntl } from 'react-intl'

import { BooksContext } from '../../contexts'
import { NewBookFormWrapper } from './NewBookForm.styled'

const NewBookForm = () => {
  const intl = useIntl()
  const { dispatch } = useContext(BooksContext)
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'ADD_BOOK', book: { name, author } })
    setName('')
    setAuthor('')
  }

  console.log('render NewBookForm') // eslint-disable-line

  return (
    <NewBookFormWrapper onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={intl.formatMessage({ id: 'common.bookName' })}
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder={intl.formatMessage({ id: 'common.bookAuthor' })}
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value={intl.formatMessage({ id: 'common.addBook' })} />
    </NewBookFormWrapper>
  )
}

export default NewBookForm
