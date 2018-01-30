import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './UI/Navigation/Navigation'
import Contacts from './pages/Contacts/Contacts'
import Portfolio from './pages/Portfolio/Portfolio'
import Details from './pages/Details/Details'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import { CSSTransitionGroup } from 'react-transition-group'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio'>
          <Redirect to='/portfolio/favorites' />
        </Route>
      </Switch>
      <Route path='/portfolio/:filter' component={Portfolio} />
      <Route render={({ location }) => (
        <CSSTransitionGroup component='div' transitionName="fade" transitionEnterTimeout={400} transitionLeaveTimeout={400} >
          <Route location={location} key={location.key} path='/portfolio/:filter/details/:item' component={Details} />
        </CSSTransitionGroup>
      )}/>
      <Navigation />
    </div>
  )
}

export default App
