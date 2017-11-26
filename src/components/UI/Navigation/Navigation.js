import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as actionCreators from 'store/ui'

import './Navigation.css'

class Navigation extends Component {
  shouldComponentUpdate = (nextProps) => {
    return nextProps.navOpen !== this.props.navOpen
  }

  componentDidUpdate = () => {
    if (this.props.navOpen) {
      this.overlay.classList.add('open')
      document.body.classList.add('navigation-open')
      setTimeout(() => {
        this.overlay.classList.add('visible')
      }, 1)
    } else if (!this.props.navOpen) {
      this.overlay.classList.remove('visible')
      setTimeout(() => {
        this.overlay.classList.remove('open')
        document.body.classList.remove('navigation-open')
      }, 300)
    }
  }

  toggleNav = (e) => {
    const { navOpen, actions } = this.props
    actions.toggleNav(!navOpen)
  }

  render () {
    console.log('render nav');
    const { navOpen } = this.props
    return (
      <nav className={navOpen ? 'navigation open' : 'navigation'}>
        <div className='navigation-links' onClick={this.toggleNav}>
          <NavLink exact className='navigation-link' activeClassName='navigation-link-active' to='/'>Главная</NavLink>
          <NavLink exact className='navigation-link' activeClassName='navigation-link-active' to='/about'>Обо мне</NavLink>
          <NavLink className='navigation-link' activeClassName='navigation-link-active' to='/portfolio'>Портфолио</NavLink>
          <NavLink exact className='navigation-link' activeClassName='navigation-link-active' to='/contacts'>Контакты</NavLink>
        </div>
        <div className='navigation-overlay' ref={overlay => this.overlay = overlay} onClick={this.toggleNav} />
        <div className='bars-container'>
          <button className='bars-button' onClick={this.toggleNav}>
            <i className='fa fal fa-bars' />
          </button>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  navOpen: state.ui.navOpen,
})

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
