import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../store/portfolio'

class Portfolio extends Component {
  componentWillMount = () => {
    this.props.actions.getPortfolioItems()
  }

  render () {
    return (
      <div>portfolio</div>
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
