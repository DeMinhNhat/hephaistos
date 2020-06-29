import uuid from 'uuid/v4'
import { ACTION_TYPES } from '../utils/constants'

export const booksReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_BOOKS:
      return {
        ...state,
        books: [...action.books],
      }
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
    default:
      return state
  }
}
