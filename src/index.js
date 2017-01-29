import React    from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import App      from './App'
import Home     from './screens/Home/Home.js'
import About    from './screens/About/About.js'
import NotFound from './screens/NotFound/NotFound.js'

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
)

ReactDOM.render(router, document.getElementById('root'))
