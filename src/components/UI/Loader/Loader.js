import React from 'react'

import './Loader.css'

const ring = {
  cy: '35',
  cx: '35',
  r: '30'
}

const Loader = ({ fullscreen, image }) => {
  const classname = `loader ${fullscreen ? 'fullscreen' : ''} ${image ? 'image' : ''}`
  return (
    <div className={classname}>
      <svg className='rings-container' viewBox="0 0 70 70" width="70" height="70">
        <circle className='ring ring-back' {...ring} />
        <circle className='ring ring-front' {...ring} />
      </svg>
    </div>
  )
}

export default Loader
