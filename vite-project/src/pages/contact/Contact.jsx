import React from 'react'
import { Link } from 'react-router-dom'
import "./Contact.css"
function Contact() {
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
       <section className="hero__contact">
            <h1 className="hero__title">Contact Me</h1>
            <p className="hero__text">Have questions? I have answers.</p>
            </section>
            <section className="main__contact">
                <p className="contact__text">Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                <div className="form">
                    <form>
                    <input type="text" placeholder="Name" id="input" required/>
                    <input type="text" placeholder="Email Address" id="input" required/>
                    <input type="text" placeholder="Phone Number" id="input" required/>
                    <input type="text" placeholder="Message" id="input" required/>       
                    <button className="send">Send</button>
                    </form>
                  
                </div>
                </section>
        </main>
    </div>
  )
}

export default Contact
