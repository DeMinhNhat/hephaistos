import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './themes/darkTheme'
import { lightTheme } from './themes/lightTheme'
import { LocalThemeContext } from './contexts'

const ThemeContextProvider = ({ children }) => { // eslint-disable-line
  const [light, setLight] = useState(true)
  const toggleTheme = () => setLight(!light)

  return (
    <LocalThemeContext.Provider value={{ light, toggleTheme }}>
      <ThemeProvider theme={light ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </LocalThemeContext.Provider>
  )
}

export default ThemeContextProvider

// const Button = styled.button`
//   background: ${({ theme }) => theme.primaryColor};
//   font-family: ${({ theme }) => theme.fontFamily};
// `
// const Component = styled.div`
// background: ${({ background }) => background || 'red'};
// font-size: ${({ theme }) => theme.fontSize.sm};
// margin-left: ${({ isRight }) => (isRight ? '20px' : '10px')};
// ${({ isPrimary, theme }) => isPrimary
//   && css`
//     margin: 10px 0;
//     padding: 0 10px;
//     color: ${theme.colors.orange};
//     transition: all .3s;
// `}
// `

// const Icon = styled.svg`
//   flex: none;
//   transition: fill 0.25s;
//   width: 48px;
//   height: 48px;

//   ${Link}:hover & {
//     fill: ${({ theme }) => theme.colors.yellow};
//   }
// `
