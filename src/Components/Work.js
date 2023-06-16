import React from 'react'
import '../styles/Work.css'
import eventbux from '../assets/eventbux.png'
import focuz from '../assets/focuz.png'

function Work() {
  return (
    <div className='work'>
    
    <div className='work-head'>
        <p>(Selected Work)</p>
        <p>Discover ↓</p>
    </div>

    <div className='work-1'>
     <img src={eventbux} alt="eventbux" />
      <div className='work-1_content'>
        <h1>EVENTBUX</h1>
        <p>Event Website's for colleges enabling more social-cultrural activities</p>
        <p>2022</p>
      </div>
    </div>
   
    <div style={{
        "marginTop" :"8rem"
    }} className='work-1'>
     <img src={focuz} alt="eventbux" />
      <div className='work-1_content'>
        <h1>FOCUZ</h1>
        <p>Enabling Students to complete study goals withought distractions</p>
        <p>2023</p>
      </div>
    </div>

    </div>
  )
}

export default Work