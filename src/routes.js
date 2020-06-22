import React from 'react'
// import { FormattedMessage } from 'react-intl'

const Books = React.lazy(() => import('./containers/Books'))

const routes = [
  {
    path: '/',
    name: 'Books',
    component: Books,
    rolesAccess: [],
  },
]

export default routes
