import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uniqueId, flatten, uniq } from 'lodash'
import * as actionCreators from '../../store/portfolio'


import PortfolioList from './PortfolioList/PortfolioList'
import PortfolioListItem from './PortfolioListItem/PortfolioListItem'

class Portfolio extends Component {
  state = {
    filteredItems: []
  }

  componentWillMount = () => {
    this.props.actions.getPortfolioItems()
  }

  filterItems = filter => () => {
    const { items } = this.props
    const filteredItems = items.filter(item => {
      return item.cat.includes(filter)
    })
    this.setState({
      filteredItems
    })
  }

  renderFilters = () => {
    const filters = uniq(flatten(this.props.items.map(item => item.cat.split(', '))))
    return filters.map(filter => {
      return (
        <button key={uniqueId('filter')} onClick={this.filterItems(filter)}>{filter}</button>
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
      <div>
        <div>
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
  loading: state.portfolio.loading
})

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
