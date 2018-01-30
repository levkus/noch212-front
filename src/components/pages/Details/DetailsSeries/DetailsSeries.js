import React, { Component } from 'react'

import './DetailsSeries.css'

class DetailsSeries extends Component {

  render () {
    return (
      <div className='details-series'>
        <h4 className='ds-title'>Из этой серии:</h4>
        <div className='ds-grid'>
          <div className='ds-item'>
            <img className='ds-image' src={this.props.image} alt="" />
          </div>
          <div className='ds-item'>
            <img className='ds-image' src={this.props.image} alt="" />
          </div>
          <div className='ds-item'>
            <img className='ds-image' src={this.props.image} alt="" />
          </div>
          <div className='ds-item'>
            <img className='ds-image' src={this.props.image} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default DetailsSeries
