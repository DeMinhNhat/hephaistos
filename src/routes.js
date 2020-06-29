import React from 'react'

const Books = React.lazy(() => import('./containers/Books'))

const routes = [
  {
    path: '/',
    name: 'Books',
    component: Books,
    exact: true,
    rolesAccess: [],
  },
  {
    path: '/books/:bookId?',
    name: 'Books',
    component: Books,
    exact: true,
    rolesAccess: [],
  },
]

export default routes
