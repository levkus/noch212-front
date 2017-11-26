import React, { Component } from 'react'

import './ModalOverlay.css'

class ModalOverlay extends Component {
  render () {
    return (
      <div className='modal-overlay' onClick={this.props.onClick} ref={overlay => this.overlay = overlay}>
        {this.props.children}
      </div>
    )
  }
}

export default ModalOverlay
