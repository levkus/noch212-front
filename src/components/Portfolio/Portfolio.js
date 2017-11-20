import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uniqueId, flatten, uniq } from 'lodash'
import * as actionCreators from '../../store/portfolio'

import PortfolioList from './PortfolioList/PortfolioList'
import PortfolioListItem from './PortfolioListItem/PortfolioListItem'

import './Portfolio.css'

class Portfolio extends Component {
  state = {
    filteredItems: []
  }

  componentWillMount = async () => {
    await this.props.actions.getPortfolioItems()
    this.setState({
      filteredItems: this.props.items
    })
  }

  filterItems = () => {
    const { items, filter } = this.props
    let filteredItems = []
    if (filter === 'all') {
      filteredItems = items
    } else {
      filteredItems = items.filter(item => {
        return item.cat.includes(filter)
      })
    }
    this.setState({
      filteredItems
    })
  }

  setFilter = (filter) => async () => {
    await this.props.actions.setFilter(filter)
    this.filterItems()
  }

  renderFilters = () => {
    const filters = uniq(flatten(this.props.items.map(item => item.cat.split(', '))))
    filters.unshift('all')

    return filters.map(filter => {
      return (
        <button className='portfolio-filter-button' key={uniqueId('filter')} onClick={this.setFilter(filter)}>{filter}</button>
      )
    })
  }

  renderList = () => {
    return this.state.filteredItems.map(item => (
      <PortfolioListItem item={item} key={uniqueId('port')} />
    ))
  }

  render () {
    if (this.props.loading) {
      return <div className='loader'>Loading...</div>
    }


    return (
      <div className='portfolio'>
        <div className='portfolio-filters'>
          {this.renderFilters()}
        </div>
        <PortfolioList>
          {this.renderList()}
        </PortfolioList>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.portfolio.items,
  loading: state.portfolio.loading,
  filter: state.portfolio.filter,
})

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
