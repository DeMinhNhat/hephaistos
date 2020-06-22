import React, { Suspense } from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'
import routes from './routes'

function App() {
  const handleRedirect = () => '/'

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Hello world...</div>}>
          <Switch>
            {routes.map((route, index) => route.component ? (
              <Route
                key={index} // eslint-disable-line
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => <route.component {...props} />} // eslint-disable-line
              />
            ) : null,)}
            <Redirect exact from="/" to={handleRedirect()} />
            <Redirect to="/404" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
