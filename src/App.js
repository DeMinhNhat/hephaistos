import React, { Suspense } from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import routes from './routes'
import Theme from './Theme'

function App() {
  return (
    <Theme>
      <AppWrapper>
        <BrowserRouter>
          <Suspense fallback={<div>Hello world...</div>}>
            <Switch>
              {routes.map(route => route.component ? (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={() => <route.component />}
                />
              ) : null,)}
              <Redirect to="/404" />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </AppWrapper>
    </Theme>
  )
}

export default App

const AppWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  margin: 20px auto;
  width: 90%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
