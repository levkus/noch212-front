import React from 'react'
import { NavLink } from 'react-router-dom'

import './MenuLink.css'

const MenuLink = (props) => (
  <NavLink className='menu-link' activeClassName='menu-link active' {...props}>
    {props.children}
  </NavLink>
)

export default MenuLink
