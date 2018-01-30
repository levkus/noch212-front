import React, { Component } from 'react'
import Loader from 'components/UI/Loader/Loader'

import './DetailsImage.css'

class DetailsImage extends Component {
  state = {
    loading: true
  }

  finishLoading = (e) => {
    this.setState({ loading: false })
  }

  render () {
    if (this.state.loading) {
      return (
        <div className='details-image'>
          <Loader image />
          <img
            className='di-image invisible'
            onLoad={this.finishLoading}
            src={this.props.image}
            alt=""
          />
        </div>
      )
    }

    return (
      <div className='details-image'>
        <img
          className='di-image'
          src={this.props.image}
          alt=""
        />
      </div>
    )
  }
}

export default DetailsImage
