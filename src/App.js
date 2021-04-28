import './App.css'

import { Route, Switch, withRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import React from 'react'
import blog from './screen/Blog'
import home from './screen/Home'
import navBar from './components/NavBar'

const App = withRouter(({ location }) => {
  return (
    <div className='App'>
      <Route path='/' component={navBar} />
      <Route path='/home' component={home} />
      <Route path='/blog' component={blog} />
    </div>
  )
})

export default App
