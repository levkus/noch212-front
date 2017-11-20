import React from 'react'
import Masonry from 'react-masonry-css';
import './PortfolioList.css'

const breakpointColumnsObj = {
  default: 5,
  1100: 4,
  700: 3,
  500: 2,
  400: 1,
}

const PortfolioList = ({ children }) => (
  <Masonry breakpointCols={breakpointColumnsObj} className='pl-grid' columnClassName='pl-column'>
    {children}
  </Masonry>
)

export default PortfolioList
