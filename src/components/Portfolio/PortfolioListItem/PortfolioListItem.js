import React from 'react'
import { techsMap } from '../utils'
import './PortfolioListItem.css'

const PortfolioListItem = ({ item, className, delay }) => {
  const classnames = `${item.cat.split(', ').map(cat => cat).join(' ')} ${item.techs.split(', ').map(cat => cat).join(' ')}`
  const techs = item.techs.split(', ').map(tech => techsMap[tech]).join(', ')
  const date = new Date(0)
  date.setUTCSeconds(item.date)
  return (
    <div className={`${className} pli-container ${classnames}`}>
      <div className='pli-wrapper' style={{ animationDelay: `${delay}s` }}>
        <div className='pli-thumb-container'>
          <img className='pli-thumb' src={`${item.url}/${item.thumb}`} alt="" />
        </div>
        <div className='pli-info'>
          <h3 className='pli-title'>{item.title}</h3>
          <div className='pli-techs'>{techs}</div>
          <p className='pli-lead'>{item.lead}</p>
          <div className='pli-date'>{date.getFullYear()}</div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioListItem
