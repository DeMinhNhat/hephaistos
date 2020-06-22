import React, { Suspense } from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'
import routes from './routes'
import Theme from './Theme'

function App() {
  return (
    <div className="App">
      <Theme>
        <BrowserRouter>
          <Suspense fallback={<div>Hello world...</div>}>
            <Switch>
              {routes.map((route, index) => route.component ? (
                <Route
                  key={index} // eslint-disable-line
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />} // eslint-disable-line
                />
              ) : null,)}
              <Redirect to="/404" />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Theme>
    </div>
  )
}

export default App
