import React, { useContext } from 'react'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import { BooksContext, LocalThemeContext } from '../../contexts'
import { NavbarWrapper } from './Navbar.styled'

const Navbar = () => {
  const { state } = useContext(BooksContext)
  const { books } = state
  const { toggleTheme, light } = useContext(LocalThemeContext)

  console.log('render Navbar') // eslint-disable-line

  return (
    <NavbarWrapper>
      <span>
        {light ? (
          <img src={sun} onClick={e => toggleTheme()} /> // eslint-disable-line
        ) : (
          <img src={moon} onClick={e => toggleTheme()} /> // eslint-disable-line

        )}
      </span>
      <h1>Ninja Reading List</h1>
      <p>
        Currently you have
        {' '}
        {books.length}
        {' '}
        book(s) to get through...
      </p>
    </NavbarWrapper>
  )
}

export default Navbar
