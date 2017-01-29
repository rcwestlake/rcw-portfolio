import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import App from './App'

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>
)
