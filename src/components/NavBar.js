import './NavBar.css'

import { NavLink } from 'react-router-dom'

const navBar = () => {
  return (
    <div id='navBar'>
      <ul className='nav'>
        <li className='navTo'>
          <NavLink to='/home' className='homeLink' activeClassName='selected'>
            Home
          </NavLink>
        </li>
        <li className='nav'>
          <NavLink
            to='/apropos'
            className='aproposLink'
            activeClassName='selected'
          >
            Qui suis je ?
          </NavLink>
        </li>
        <li className='nav'>
          <NavLink
            to='/constact'
            className='contactLink'
            activeClassName='selected'
          >
            me contacter
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default navBar
