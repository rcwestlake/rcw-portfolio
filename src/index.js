import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import App from './App'
import About from './screens/About/About.js'
import NotFound from './screens/NotFound/NotFound.js'

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='about' component={About} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
)

ReactDOM.render(router, document.getElementById('root'))
