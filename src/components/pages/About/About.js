import React from 'react'
import Header from 'components/UI/Header/Header'

import './About.css'

const About = () => (
  <div>
    <Header logo transparent />
    <div className='about'>
      <div className='about-container'>
        <div className='about-photo' />
        <div className='about-separator' />
        <div className='about-text'>
          Привет! Меня зовут Василина.
        </div>
      </div>
    </div>
  </div>
)

export default About
