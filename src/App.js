import './App.css'

import { Route, Switch, withRouter } from 'react-router-dom'

import React from 'react'
import home from './screen/Home'
import navBar from './components/NavBar'

const App = withRouter(({ location }) => {
  return (
    <div className='App'>
      <Route path='/' component={navBar} />
      <Route path='/home' component={home} />
    </div>
  )
})

export default App
