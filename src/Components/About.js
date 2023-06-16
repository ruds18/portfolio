import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='about-header'>
        <h1>About Me </h1>
        <span></span>
      </div>

      

      <div className='about-content'>
        <p>Hi,I'm Rudransh , a passonate self-taught web developer and UI/UX designer. </p>
        <p>I am from India , persuing my undergraduate degree in "Computer Sciences with specialisation in AI and ML"</p>
      </div>
      <h3 style={{ "marginTop": "1rem"}}>My Tech-Stack includes:</h3>
      <div className='about-techStack'> 
       
       <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt='logo' />
       <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt='logo' /> 
       <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt='logo' /> 
       <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt='logo' />
       <img src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' alt='logo'/>
       <img src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge' alt='logo' />
       <img src='https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' alt='logo' />
       <img src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' alt='logo' />
       <img src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white' alt='logo' />
      </div>
    </div>
  )
}

export default About