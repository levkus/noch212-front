import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uniqueId } from 'lodash'

import * as actionCreators from 'store/portfolio'

import Header from 'components/UI/Header/Header'
import Loader from 'components/UI/Loader/Loader'
import PortfolioList from './PortfolioList/PortfolioList'
import PortfolioListItem from './PortfolioListItem/PortfolioListItem'
import FiltersList from 'components/UI/FiltersList/FiltersList'

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
    return nextProps.match.params.filter !== this.props.match.params.filter ||
           nextProps.items !== this.props.items ||
           nextProps.loading !== this.props.loading ||
           nextProps.filteredItems !== this.props.filteredItems
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

  renderList = () => {
    return this.props.filteredItems.map((item, i) => (
      <PortfolioListItem item={item} key={uniqueId('port')} delay={i * 0.08} />
    ))
  }

  render () {
    const { loading, items } = this.props
    if (loading) {
      return <Loader fullscreen />
    }
    console.log('Portfolio render');
    return (
      <div>
        <Header logo center />
        <main className='portfolio'>
          <FiltersList items={items} />
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
