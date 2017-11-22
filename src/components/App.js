import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ModalContainer, ModalRoute } from 'react-router-modal'
import { withRouter } from 'react-router'

import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Contacts from './Contacts/Contacts'
import About from './About/About'
import Details from './Portfolio/Details/Details'
import Navigation from './Navigation/Navigation'

const App = (props) => {
  console.log('%c> match:', 'background: #00897B; color: #fff; padding: 5px; font-weight: bold;', props);
  return (
    <div>
      <Switch>
        <Route exact path ='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact path='/home' component={Home} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio'>
          <Redirect to='/portfolio/all' />
        </Route>
        <Route path='/portfolio/:filter' render={(props) => <Portfolio {...props} />} />
        <ModalRoute exact path='/details/:item' parentPath='/portfolio/all' component={Details} />
      </Switch>
      <Navigation />
      <ModalContainer />
    </div>
  )
}

export default withRouter(App)
