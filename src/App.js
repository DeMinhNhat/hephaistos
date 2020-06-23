import React, { Suspense, useState } from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import { IntlProvider } from 'react-intl'
import Theme from './Theme'
import routes from './routes'
import vi from './locales/vi.json'
import en from './locales/en.json'

const defaultLocale = localStorage.locale ? localStorage.locale : 'vi'
const localeList = [
  { name: 'English', code: 'en', lang: 'English' },
  { name: 'Việt Nam', code: 'vi', lang: 'Vietnamese' },
]
const messages = {
  vi: { ...vi },
  en: { ...en },
}

function App() {
  const [currentLocale, setCurrentLocale] = useState(defaultLocale)
  const onChangeLanguage = e => {
    const selectedLocale = e.target.value
    setCurrentLocale(selectedLocale)
    localStorage.setItem('locale', selectedLocale)
  }

  return (
    <Theme>
      <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
        <AppWrapper>
          <select onChange={onChangeLanguage} defaultValue={currentLocale}>
            {localeList.map(locale => (
              <option key={locale.code} value={locale.code}>
                {locale.name}
              </option>
            ))}
          </select>
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
      </IntlProvider>
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
