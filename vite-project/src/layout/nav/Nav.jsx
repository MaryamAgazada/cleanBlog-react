// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./Nav.css"
// function Nav() {
//   return (
//     <div>
//          <nav className='navbar'>
//          <div class="logo">Start Bootstrap</div>
//         <ul className='item'>
//           <li>
//             <Link className='items' to="/"> home</Link>
//           </li>
//           <li>
//             <Link className='items' to="/About.jsx">About</Link>
//           </li>
//           <li>
//             <Link className='items' to="/SamplePost.jsx"> sample post</Link>
//           </li>
//           <li>
//             <Link className='items' to="/Contact.jsx">contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Nav
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.scss"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("object")
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className="logo">Start Bootstrap</div>
   
      <ul className={`item ${isOpen ? 'open' : ''}`}>
        <li>
          <Link className='items' to="/" >Home</Link>
        </li>
        <li>
          <Link className='items' to="/About" >About</Link>
        </li>
        <li>
          <Link className='items' to="/SamplePost" >Sample Post</Link>
        </li>
        <li>
          <Link className='items' to="/Contact" >Contact</Link>
        </li>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} >
        <div onClick={toggleMenu} className="menu-icon__line"><i class="fa-solid fa-bars"></i></div>
      </div>
      </ul>
    </nav>
  );
};

export default Nav;
