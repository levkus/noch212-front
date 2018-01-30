import React from 'react'

import './DetailsMetaItem.css'

const DetailsMetaItem = ({ title, value }) => {
  return (
    <div className='details-meta-item'>
      <span className='dmi-title'>{`${title}: `}</span>
      <span className='dmi-value'>{value}</span>
    </div>
  )
}

export default DetailsMetaItem
