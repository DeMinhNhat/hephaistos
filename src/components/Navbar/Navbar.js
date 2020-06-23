import React, { useContext } from 'react'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import { BooksContext, LocalThemeContext } from '../../contexts'

const Navbar = () => {
  const { books } = useContext(BooksContext)
  const { toggleTheme, light } = useContext(LocalThemeContext)
  return (
    <div className="navbar">
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
    </div>
  )
}

export default Navbar
