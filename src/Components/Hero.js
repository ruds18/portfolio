import React from 'react'
import '../styles/Hero.css'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className='hero-container'>
      <div className='navbar'>
        <div className='navbar-start'>
        <h1>RK</h1>
        <p>From Vellore Institute of Technology - Bhopal</p>
        </div>
        
        <div className='navbar-end'>
             <div className='navbar-end_links'>
             <Link>Projects</Link>,<Link>About</Link>
             </div>
            
          <a href='https://github.com/ruds18' >Github</a>
        </div>
 
      </div>

      <div className='hero'>
       <div className='hero-focus'>
        <h1>RUDRANSH KHANDELWAL</h1>
        <h1>WEB DEVELOPER</h1>
       </div>
       <div className='hero-content'>
        <p>Through strategic art direction and webdesign I help companies around the world grow their business</p>
       </div>
      </div>

       <button className='hero-btn'><span>rudranshkhandelwal123@gmai.com</span></button>

    </div>


  )
}

export default Hero