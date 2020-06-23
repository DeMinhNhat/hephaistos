import uuid from 'uuid/v4'
import { ACTION_TYPES } from '../utils/constants'

export const booksReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_BOOK:
      return {
        ...state,
        books: [
          {
            title: action.book.title,
            author: action.book.author,
            id: uuid(),
          },
        ],
      }
    case ACTION_TYPES.REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.id),
      }
    default:
      return state
  }
}
