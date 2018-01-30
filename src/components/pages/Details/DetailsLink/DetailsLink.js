import React from 'react'

import './DetailsLink.css'

const DetailsLink = ({ link }) => {
  return (
    <div className='details-link-container'>
      <div className='dl-title'>Ссылка:</div>
      <a className='details-link' target={'_blank'} href={link}>{link}</a>
    </div>
  )
}

export default DetailsLink
