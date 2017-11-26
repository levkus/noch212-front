import React from 'react'
import Header from 'components/UI/Header/Header'

import './Contacts.css'

const Contacts = () => (
  <div>
    <Header logo transparent />
    <div className='contacts'>
      <div className='contacts-container'>
        <a className='contacts-link' href='mailto:noch212@gmail.com'>
          <i className='fal fa-fw fa fa-envelope contacts-icon' />
          <span className='contacts-link-text'>noch212@gmail.com</span>
        </a>
        <a className='contacts-link' href='https://www.facebook.com/vasilina.usoltseva'>
          <i className='fab fa-fw fa fa-facebook contacts-icon' />
          <span className='contacts-link-text'>Vasilina Usoltseva</span>
        </a>
        <a className='contacts-link' href='https://vk.com/noch212'>
          <i className='fab fa-fw fa fa-vk contacts-icon' />
          <span className='contacts-link-text'>Василина Усольцева</span>
        </a>
        <a className='contacts-link' href='https://www.instagram.com/noch212/'>
          <i className='fab fa-fw fa fa-instagram contacts-icon' />
          <span className='contacts-link-text'>@noch212</span>
        </a>
      </div>
    </div>
  </div>
)

export default Contacts
