import React, { Component } from 'react'
import Masonry from 'react-masonry-css';

import './PortfolioList.css'

const breakpointColumnsObj = {
  default: 8,
  2400: 7,
  2100: 6,
  1800: 5,
  1500: 4,
  1200: 3,
  900: 2,
  600: 1,
}

class PortfolioList extends Component {
  render () {
    console.log('PortfiloList Render')
    return (
      <div>
        <h4 className='pl-announce'>Порфолио в активной разработке</h4>
        <Masonry breakpointCols={breakpointColumnsObj} className='pl-grid' columnClassName='pl-column'>
          {this.props.children}
        </Masonry>
      </div>
    )
  }
}

export default PortfolioList
