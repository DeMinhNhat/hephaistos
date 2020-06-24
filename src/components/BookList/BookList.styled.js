import styled from 'styled-components'

export const BookListWrapper = styled.div`
  margin: 20px;
  text-align: center;
  color: ${({ theme }) => theme.color};
  ul {
    padding: 0;
    list-style-type: none;
    li {
      background: ${({ theme }) => theme.background};
      border-radius: 4px;
      padding: 10px;
      cursor: pointer;
      margin: 10px 0;
      .title {
        font-weight: bold;
        color: ${({ theme }) => theme.color};
        font-size: 1.2em;
      }
      .author {
        font-size: 0.9em;
        color: ${({ theme }) => theme.color};
      }
    }
    li:hover {
      opacity: 0.7;
      text-decoration: line-through;
    }
  }
`
