import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { uniqueId, flatten, uniq } from 'lodash'
import { buttonsMap } from '../utils'

import './FiltersList.css'

class FiltersList extends Component {

  shouldComponentUpdate = (nextProps) => {
    if (nextProps.items !== this.props.items) return true
    if (nextProps.match.params.filter !== this.props.match.params.filter) return true
    if (nextProps.navOpen !== this.props.navOpen) return true
    return false
  }

  componentDidUpdate = () => {
    if (this.props.filtersOpen) {
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

  shouldComponentUpdate = (nextProps) => {

  }

  renderFilters = () => {
    const filters = uniq(flatten(this.props.items.map(item => item.cat.split(', '))))
    filters.unshift('all')
    return filters.map(filter => {
      const label = buttonsMap[filter]
      return (
        <NavLink
          key={uniqueId('filter')} to={`/portfolio/${filter}`}
          className='navigation-link'
          activeClassName='navigation-link-active'
        >{label}</NavLink>
      )
    })
  }

  toggleFilters = (e) => {
    const { filtersOpen, actions } = this.props
    actions.toggleFilters(!filtersOpen)
  }

  render () {
    console.log('FiltersList render');
    return (
      <div className='filters-list' ref={filters => this.filters = filters}>
        <div className='navigation-links'>
          {this.renderFilters()}
        </div>
        <div className='filters-overlay' ref={overlay => this.overlay = overlay} onClick={this.toggleFilters} />
        <div className='filters-icon-container'>
          <button className='filters-button' onClick={this.toggleFilters}>
            <i className='fa fal fa-filter' />
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(FiltersList)
