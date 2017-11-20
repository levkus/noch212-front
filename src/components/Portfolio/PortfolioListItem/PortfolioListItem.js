import React from 'react'
import './PortfolioListItem.css'

const PortfolioListItem = ({ item }) => (
  <div className='pli-container'>
    <div className='pli-thumb-container'>
      <img className='pli-thumb' src={`${item.url}/${item.thumb}`} alt="" />
    </div>
    <div className='pli-info'>
      <h3 className='pli-title'>{item.title}</h3>
      <p className='pli-lead'>{item.lead}</p>
    </div>
  </div>
)

export default PortfolioListItem
