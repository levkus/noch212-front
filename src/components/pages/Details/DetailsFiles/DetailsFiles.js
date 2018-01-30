import React, { Component } from 'react'

import './DetailsFiles.css'

class DetailsFiles extends Component {
  renderFiles = () => {
    const { files } = this.props
    return files.map(file => {
      return (<a target="_blank" key={file} className='df-item' href={file}>
        <img className='df-image' src={file} alt="" />
        <div className='df-icon'><i className='far fa-fw fa fa-link' /></div>
      </a>)
    })
  }
  render () {
    const { files } = this.props
    if (files.length > 0) {
      return (
        <div className='details-files'>
          {this.renderFiles()}
        </div>
      )
    }
    return false
  }
}

export default DetailsFiles
