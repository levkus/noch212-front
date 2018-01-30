import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from 'store/ui'
import { withRouter } from 'react-router'
import { uniqueId, flatten, uniq } from 'lodash'
import { buttonsMap } from 'utils/utils'

import MenuLink from 'components/UI/MenuLink/MenuLink'

import './FiltersList.css'

class FiltersList extends Component {

  shouldComponentUpdate = (nextProps) => {
    return nextProps.match.params.filter !== this.props.match.params.filter ||
           nextProps.filtersOpen !== this.props.filtersOpen
  }

  componentDidUpdate = () => {
    if (window.innerWidth <= 600) {
      if (this.props.filtersOpen) {
        this.overlay.classList.add('open')
        document.body.classList.add('navigation-open')
        setTimeout(() => {
          this.overlay.classList.add('visible')
        }, 1)
      } else if (!this.props.filtersOpen) {
        this.overlay.classList.remove('visible')
        setTimeout(() => {
          this.overlay.classList.remove('open')
          document.body.classList.remove('navigation-open')
        }, 300)
      }
    }
  }

  renderFilters = () => {
    const filters = uniq(flatten(this.props.items.map(item => item.cat.split(', '))))
    // filters.unshift('all')
    return filters.map(filter => {
      const label = buttonsMap[filter]
      return (
        <MenuLink key={uniqueId('filter')} to={`/portfolio/${filter}`}>{label}</MenuLink>
      )
    })
  }

  toggleFilters = (e) => {
    const { filtersOpen, actions } = this.props
    actions.toggleFilters(!filtersOpen)
  }

  render () {
    console.log('FiltersList render');
    const { filtersOpen } = this.props
    return (
      <div className={filtersOpen ? 'filters-list open' : 'filters-list'} ref={filters => this.filters = filters}>
        <div className='filters-links' onClick={this.toggleFilters}>
          {this.renderFilters()}
        </div>
        <div className='filters-overlay' ref={overlay => this.overlay = overlay} onClick={this.toggleFilters} />
        <div className='filters-icon-container'>
          <button className='filters-button' onClick={this.toggleFilters}>
            <i className='fa fal fa-hashtag' />
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filtersOpen: state.ui.filtersOpen,
})

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

const FiltersListWithStore = connect(mapStateToProps, mapDispatchToProps)(FiltersList)

export default withRouter(FiltersListWithStore)
