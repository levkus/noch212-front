import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Vibrant from 'node-vibrant'
import * as actionCreators from '../../store/portfolio'

import './Details.css'

class Details extends Component {

  state = {
    mode: 'overview'
  }

  componentWillMount = async () => {
    const { item } = this.props.match.params
    if (this.props.items.length === 0) {
      await this.props.actions.getPortfolioItems()
    }
    await this.props.actions.openItem(this.props.items.find(i => i.id === item ))
  }

  switchMode = () => {
    if (this.state.mode === 'fullsize') {
      this.setState({ mode: 'overview' })
    } else {
      this.setState({ mode: 'fullsize' })
    }
  }

  renderColors = (e) => {
    const { openedItem } = this.props
    console.log(e.target);
    Vibrant.from(`${openedItem.url}/${openedItem.thumb}`).getPalette((err, palette) => console.log(palette))
  }

  render () {
    const { openedItem } = this.props
    const { mode } = this.state
    const date = new Date(0)
    date.setUTCSeconds(openedItem.date)

    return (
      <div className={`details ${mode}`}>
        <div className='details-title'>{openedItem.title}</div>
        <div className='details-main-image-container' onClick={this.switchMode}>
          <div className='details-image-square' style={{ backgroundImage: `url("${openedItem.url}/${openedItem.thumb}")` }} />
          <img
            className='details-main-image'
            ref={image => this.image = image}
            onLoad={this.renderColors}
            src={`${openedItem.url}/${openedItem.thumb}`}
            alt=""
          />
        </div>
        <div className='details-meta'>
          <div><span className='details-label'>Год:</span>{date.getFullYear()}</div>
          <div><span className='details-label'>Категории:</span>Test</div>
          <div><span className='details-label'>Техники:</span>Test</div>
        </div>
        <div className='details-description'>
          <div className='details-label'>Описание:</div>
          <div>
            {openedItem.lead}
          </div>
        </div>
      </div>
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
