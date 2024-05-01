import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
function Nav() {
  return (
    <div>
         <nav className='navbar'>
         <div class="logo">Start Bootstrap</div>
        <ul className='item'>
          <li>
            <Link className='items' to="/"> home</Link>
          </li>
          <li>
            <Link className='items' to="/About.jsx">About</Link>
          </li>
          <li>
            <Link className='items' to="/SamplePost.jsx"> sample post</Link>
          </li>
          <li>
            <Link className='items' to="/Contact.jsx">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
