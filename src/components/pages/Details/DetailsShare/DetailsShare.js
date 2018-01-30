import React, { Component } from 'react'
import socialLikes from 'social-likes-next'

import 'social-likes-next/lib/social-likes_flat.css'

import './DetailsShare.css'

class DetailsShare extends Component {
  componentDidMount = () => {
    socialLikes(this.share)
  }

  render () {
    return (
      <div className='social-likes' ref={share => this.share = share}>
        <div data-service="facebook" title="Facebook" />
      	<div data-service="twitter" title="Twitter" />
      	<div data-service="plusone" title="Google+" />
      	<div data-service="vkontakte" title="ВКотанкте" />
      	<div data-service="odnoklassniki" title="Одноклассники" />
      	<div data-service="pinterest" title="Pinterest" />
      	<div data-service="telegram" title="Telegram" />
      </div>
    )
  }
}

export default DetailsShare
