import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Home</h1>
    <div>
      <Link to='/portfolio'>Портфолио</Link>
    </div>
  </div>
)

export default Home
