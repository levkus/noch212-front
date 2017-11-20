import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ModalContainer, ModalRoute } from 'react-router-modal'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/portfolio'>
        <Redirect to='/portfolio/all' />
      </Route>
      <Route exact path='/portfolio/:filter' component={Portfolio} />
      <ModalRoute exact path='/modal' parentPath='/portfolio'>Hello</ModalRoute>
    </Switch>
    <ModalContainer />
  </div>
)

export default App
