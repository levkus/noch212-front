import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Header from '../Header/Header'
import './Home.css'

const Home = () => (
  <div>
    <Header transparent />
    <div className='home-container'>
      <div className='home-logo-container'>
        <Logo />
      </div>
      <nav className='home-navigation'>
        <Link className='home-link' to='/about'>Обо мне</Link>
        <Link className='home-link' to='/portfolio'>Портфолио</Link>
        <Link className='home-link' to='/contacts'>Контакты</Link>
      </nav>
    </div>
  </div>
)

export default Home
