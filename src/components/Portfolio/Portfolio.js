import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../store/portfolio'

import PortfolioList from './PortfolioList/PortfolioList'
import PortfolioListItem from './PortfolioListItem/PortfolioListItem'

class Portfolio extends Component {
  componentWillMount = () => {
    this.props.actions.getPortfolioItems()
  }

  renderList = () => {
    return this.props.items.map(item => (
      <PortfolioListItem item={item} />
    ))
  }

  render () {
    if (this.props.loading) {
      return <div className='loader'>Loading...</div>
    }

    return (
      <PortfolioList>
        {this.renderList()}
      </PortfolioList>
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
