import React from 'react'
import { Link } from 'react-router-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
import "./Home.css"
function Home() {
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
        <section class="hero">
            <h1 class="hero__title">Clean Blog</h1>
            <p class="hero__text">A Blog Theme by Start Bootstrap</p>
        </section>
        <section className="main">
            <div className="main__texts">
                <div className="main__texts__title">
                    <h2>Man must explore, and this is exploration at its greatest</h2>
            <h3>Problems look mighty small from 150 miles up</h3>
                </div>
            <p>Posted by Start Bootstrap on September 24, 2023</p>
            {/* <hr> */}
            <div className='hr'></div>
            <div className="main__texts__title">
                <h2>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine</h2>
            </div>
           <p>Posted by Start Bootstrap on September 18, 2023</p>
           {/* <hr> */}
           <div className='hr'></div>
           <div className="main__texts__title">
            <h2>Science has not yet mastered prophecy</h2>
            <h3>We predict too much for the next year and yet far too little for the next ten.</h3>
        </div>
           <p>Posted by Start Bootstrap on August 24, 2023</p>
           {/* <hr> */}
           <div className='hr'></div>
           <div className="main__texts__title">
            <h2>Failure is not an option</h2>
            <h3>Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
        </div>
           
           <p>Posted by Start Bootstrap on July 8, 2023</p>
           {/* <hr> */}
           <div className='hr'></div>
           <div className="posts"><button>older posts <i class="fa-solid fa-arrow-right"></i></button></div>
        </div>        

        </section>
        </main>
      
    </div>
  )
}

export default Home
