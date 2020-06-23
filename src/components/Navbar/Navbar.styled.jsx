import styled from 'styled-components'

export const NavbarWrapper = styled.div`
  padding: 10px 20px;
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  h1 {
      margin: 10px 0;
  }
`
