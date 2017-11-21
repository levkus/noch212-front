import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../store/ui'
import Logo from '../Logo/Logo'

import './Header.css'

const Header = ({ actions, transparent, logo }) => {
  return (
    <header className={transparent ? 'header transparent' : 'header'}>
      {logo && <div className='header-logo-container'>
        <Logo />
      </div>}
      <div className='header-name'>noch212</div>
    </header>
  )
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(null, mapDispatchToProps)(Header)
