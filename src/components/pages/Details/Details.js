import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from 'store/portfolio'

import ModalOverlay from 'components/UI/ModalOverlay/ModalOverlay'

import './Details.css'

class Details extends Component {

  componentWillMount = async () => {
    const { item } = this.props.match.params
    if (this.props.items.length === 0) {
      await this.props.actions.getPortfolioItems()
    }
    await this.props.actions.openItem(this.props.items.find(i => i.id === item ))
    document.body.classList.add('details-open')
  }

  componentWillUnmount = () => {
    document.body.classList.remove('details-open')
  }

  goBack = () => {
    const { location, history, match } = this.props
    if (!location.state) {
      console.log('no location state');
      console.log(match);
      history.push(`/portfolio/${match.params.filter}`)
    } else {
      console.log('with location state');
      history.goBack()
    }
  }

  render () {
    const { openedItem } = this.props
    // const date = new Date(0)
    // date.setUTCSeconds(openedItem.date)

    return (
      <ModalOverlay onClick={this.goBack}>
        <div className='details'>
          <div className='details-main-image-container'>
            <img
              className='details-main-image'
              ref={image => this.image = image}
              src={`${openedItem.url}/${openedItem.thumb}`}
              alt=""
            />
          </div>
        </div>
      </ModalOverlay>
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
