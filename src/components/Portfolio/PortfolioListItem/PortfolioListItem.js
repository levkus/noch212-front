import React from 'react'
import './PortfolioListItem.css'

const PortfolioListItem = ({ item }) => {
  const classnames = item.cat.split(', ').map(cat => cat).join(' ') + ' ' + item.techs.split(', ').map(cat => cat).join(' ')
  return (
    <div className={`pli-container ${classnames}`}>
      <div className='pli-wrapper'>
        <div className='pli-thumb-container'>
          <img className='pli-thumb' src={`${item.url}/${item.thumb}`} alt="" />
        </div>
        <div className='pli-info'>
          <h3 className='pli-title'>{item.title}</h3>
          <p className='pli-lead'>{item.lead}</p>
          <div className='pli-techs'>{item.techs}</div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioListItem
