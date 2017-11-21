import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ModalContainer, ModalRoute } from 'react-router-modal'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Contacts from './Contacts/Contacts'
import About from './About/About'
import Navigation from './Navigation/Navigation'

const App = () => {
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
        <Route path='/portfolio/:filter' component={Portfolio} />
        <ModalRoute exact path='/modal' parentPath='/portfolio'>Hello</ModalRoute>
      </Switch>
      <ModalContainer />
      <Navigation />
    </div>
  )
}

export default App
