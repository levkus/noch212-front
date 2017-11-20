import React from 'react'
import './FilterButton.css'

const FilterButton = ({ children, onClick, active }) => (
  <button className={active ? 'pfb-active' : 'pfb'} onClick={onClick}>{children}</button>
)

export default FilterButton
