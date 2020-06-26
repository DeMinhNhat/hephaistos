import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { split, from } from 'apollo-link'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/vulcanql',
})

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/vulcanql',
  options: {
    reconnect: true,
  },
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

export const client = new ApolloClient({
  link: from([link]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})
