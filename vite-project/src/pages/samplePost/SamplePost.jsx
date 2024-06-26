import React from 'react'
import "./Sample.css"
import { Link } from 'react-router-dom'
import { useState } from 'react';
function SamplePost() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
          <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-icon__line"><i class="fa-solid fa-bars"></i></div>
      </div>
        </ul>
      </nav>
       <main>
        <section className="hero__sample">
            <h1 className="hero__title__sample">Man must explore, and this is exploration at its greatest</h1>
            <h2 className="hero__title__commet__sample">Problems look mighty small from 150 miles up</h2>
            <p className="hero__text__sample">Posted by Start Bootstrap on August 24, 2023</p>
            </section>
            <section className="main__sample">
                <p className="main__text__sample">Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>
                <p className="main__text__sample">Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p>
                <p className="main__text__sample">Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p>
                <p className="main__text__sample">What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>
                <p className="main__text__sample">A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>
                <p className="main__text__sample">For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>
                <h2 className="main__title">The Final Frontier</h2>
                <p className="main__text__sample">There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
                <p className="main__text__sample">There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
                <p className="blockquote">The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</p>
                <p className="main__text__sample">Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p>
                <h2 className="main__title">Reaching for the Stars</h2>
                <p className="main__text__sample">As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p>
                <img src="https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/post-sample-image.jpg" alt="this photo" className="main__img__sample"/>
                <p className="main__img__commet__sample">To go places and do things that have never been done before – that’s what living is all about.</p>
                <p className="main__text__sample">Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>
                <p className="main__text__sample">As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>
                <p className="main__text__sample">Placeholder text by Space Ipsum · Images by NASA on The Commons</p>
            
            </section>
          
        </main>
    </div>
  )
}

export default SamplePost
