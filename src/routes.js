import React from 'react'
// import { FormattedMessage } from 'react-intl'

const Books = React.lazy(() => import('./containers/Books'))
// const BookDetail = React.lazy(() => import('./containers/BookDetail'))

const routes = [
  {
    path: '/books',
    name: 'Books',
    component: Books,
    exact: true,
    rolesAccess: [],
  },
  {
    path: '/books/:bookId',
    name: 'BookDetail',
    component: Books,
    rolesAccess: [],
  },
]

export default routes
