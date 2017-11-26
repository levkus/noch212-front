import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uniqueId, flatten, uniq } from 'lodash'
import { NavLink } from 'react-router-dom'
import * as actionCreators from 'store/portfolio'
import { buttonsMap } from './utils'

import Header from 'components/UI/Header/Header'
import Loader from 'components/UI/Loader/Loader'
import PortfolioList from './PortfolioList/PortfolioList'
import PortfolioListItem from './PortfolioListItem/PortfolioListItem'

import './Portfolio.css'

class Portfolio extends Component {

  componentWillMount = async () => {
    const { filter } = this.props.match.params
    await this.props.actions.getPortfolioItems()
    this.props.actions.setFilteredItems(this.filterItems(filter))
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.match.params.filter !== nextProps.match.params.filter) {
      const { filter } = nextProps.match.params
      this.props.actions.setFilteredItems(this.filterItems(filter))
      window.scrollTo(0, 0)
    }
  }

  shouldComponentUpdate = (nextProps) => {
    if (nextProps.match.params.filter !== this.props.match.params.filter) {
      console.log('filter changed');
      return true
    }
    if (nextProps.items !== this.props.items) {
      console.log('items changed');
      return true
    }
    if (nextProps.loading !== this.props.loading) {
      console.log('loading changed');
      return true
    }
    if (nextProps.filteredItems !== this.props.filteredItems) {
      console.log('filteredItems changed');
      return true
    }
    return false
  }

  filterItems = (filter) => {
    const { items } = this.props
    let filteredItems = []
    if (filter === 'all') {
      filteredItems = items
    } else {
      filteredItems = items.filter(item => item.cat.includes(filter))
    }
    return filteredItems
  }

  renderFilters = () => {
    const filters = uniq(flatten(this.props.items.map(item => item.cat.split(', '))))
    filters.unshift('all')
    return filters.map(filter => {
      const label = buttonsMap[filter]
      return (
        <NavLink
          key={uniqueId('filter')} to={`/portfolio/${filter}`}
          className='pfb' activeClassName='pfb-active'
        >{label}</NavLink>
      )
    })
  }

  renderList = () => {
    return this.props.filteredItems.map((item, i) => (
      <PortfolioListItem item={item} key={uniqueId('port')} delay={i * 0.08} />
    ))
  }

  render () {
    const { loading } = this.props
    if (loading) {
      return <Loader fullscreen />
    }
    console.log('render list');
    return (
      <div>
        <Header logo />
        <main className='portfolio'>
          <div className='portfolio-filters' ref={filters => this.filters = filters}>
            {this.renderFilters()}
          </div>
          <PortfolioList>
            {this.renderList()}
          </PortfolioList>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.portfolio.items,
  loading: state.portfolio.loading,
  filteredItems: state.portfolio.filteredItems
})

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
