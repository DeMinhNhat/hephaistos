import styled from 'styled-components'

export const BookDetailWrapper = styled.div`
  li {
    background: #6d3d6d;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
    margin: 10px 0;
  }
  li:hover {
    opacity: 0.7;
    text-decoration: line-through;
  }
  .title {
    font-weight: bold;
    color: #fff;
    font-size: 1.2em;
  }
  .author {
    font-size: 0.9em;
    color: #ddd;
  }
`
