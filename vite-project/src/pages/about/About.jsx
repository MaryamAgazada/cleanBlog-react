import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css"
function About() {
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
      <main>
        <section className="hero__about">
            <h1 className="hero__title">About Me</h1>
            <p className="hero__text">This is what I do.</p>
            </section>
            <section className="main__about">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
            </section>
        </main>
    </div>
  )
}

export default About
