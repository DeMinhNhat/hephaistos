import styled from 'styled-components'

export const AppWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  margin: 20px auto;
  width: 90%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
