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
          <h2 className='about-hi'>Привет!</h2>
          Меня зовут Василина. Я художник и дизайнер. А еще я никудышный копирайтер.
          <br />
          На этом, пожалуй, и закончу :)
        </div>
      </div>
    </div>
  </div>
)

export default About
