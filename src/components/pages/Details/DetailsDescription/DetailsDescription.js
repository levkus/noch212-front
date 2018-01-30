import React from 'react'

import './DetailsDescription.css'

const DetailsDescription = ({ text }) => (
  <div className='details-description'>
    <div className='dd-title'>Описание:</div>
    <div className='dd-text'>{text}</div>
  </div>
)

export default DetailsDescription
