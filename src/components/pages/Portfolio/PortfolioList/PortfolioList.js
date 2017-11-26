import React from 'react'
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

const PortfolioList = ({ children }) => (
  <Masonry breakpointCols={breakpointColumnsObj} className='pl-grid' columnClassName='pl-column'>
    {children}
  </Masonry>
)

export default PortfolioList
