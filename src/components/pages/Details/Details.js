import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from 'store/portfolio'
import { makeDate } from 'utils/utils'

import DetailsDescription from './DetailsDescription/DetailsDescription'
import DetailsFiles from './DetailsFiles/DetailsFiles'
import DetailsImage from './DetailsImage/DetailsImage'
import DetailsMeta from './DetailsMeta/DetailsMeta'
import DetailsMetaItem from './DetailsMetaItem/DetailsMetaItem'
import DetailsSeries from './DetailsSeries/DetailsSeries'
import DetailsShare from './DetailsShare/DetailsShare'

import ModalOverlay from 'components/UI/ModalOverlay/ModalOverlay'
import Loader from 'components/UI/Loader/Loader'
import Separator from 'components/UI/Separator/Separator'

import './Details.css'

class Details extends Component {
  state = {
    goBackFired: false
  }

  componentWillMount = async () => {
    const { item } = this.props.match.params
    if (this.props.items.length === 0) {
      await this.props.actions.getPortfolioItems()
    }
    await this.props.actions.selectItem(this.props.items.find(i => i.id === item ))
    document.body.classList.add('details-open')
  }

  componentWillUnmount = () => {
    document.body.classList.remove('details-open')
    this.props.actions.selectItem({})
  }

  goBack = () => {
    const { location, history, match } = this.props
    if (!this.state.goBackFired) {
      if (!location.state) {
        history.push(`/portfolio/${match.params.filter}`)
        this.setState({ goBackFired: true })
      } else {
        history.goBack()
        this.setState({ goBackFired: true })
      }
    } else {
      return false
    }
  }

  render () {
    const { selected, loading } = this.props

    if (loading || !selected.title) {
      return (
        <ModalOverlay onClick={this.goBack}>
          <div className='details'>
            <Loader />
          </div>
        </ModalOverlay>
      )
    }

    const year = makeDate(selected.date).year()
    const files = selected.files.map(file => `${selected.url}/${file}`)
    const currentImage = `${selected.url}/${selected.thumb}`
    console.log('selected', selected)

    return (
      <ModalOverlay onClick={this.goBack}>
        <div className='details' onClick={(e) => { e.stopPropagation() }}>
          <div className='details-image-container'>
            <DetailsImage image={currentImage}/>
            <DetailsFiles files={files} />
          </div>
          <div className='details-meta-container'>
            <DetailsShare />
            {/* <Separator /> */}
            <DetailsMeta>
              <DetailsMetaItem title='Название' value={selected.title} />
              <DetailsMetaItem title='Год' value={year} />
              <DetailsDescription text={selected.lead} />
            </DetailsMeta>
            {/* <Separator /> */}
            {/* <DetailsSeries image={currentImage} /> */}
          </div>
        </div>
      </ModalOverlay>
    )
  }
}

const mapStateToProps = state => ({
  items: state.portfolio.items,
  loading: state.portfolio.loading,
  selected: state.portfolio.selected
})

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
