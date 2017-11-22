import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../store/portfolio'

class Details extends Component {

  componentWillMount = async () => {
    const { item } = this.props.match.params
    if (this.props.items.length === 0) {
      await this.props.actions.getPortfolioItems()
    }
    await this.props.actions.openItem(this.props.items.find(i => i.id === item ))
  }

  renderImage = () => {
    const {openedItem} = this.props
    return <img src={`${openedItem.url}/${openedItem.thumb}`} alt=""/>
  }

  render () {
    return (
      <div>{this.renderImage()}</div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.portfolio.items,
  openedItem: state.portfolio.openedItem
})

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
