import React    from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App      from './App'
import Home     from './screens/Home/Home.js'
import About    from './screens/About/About.js'
import Projects from './screens/Projects/Projects.js'
import Contact  from './screens/Contact/Contact.js'
import NotFound from './screens/NotFound/NotFound.js'

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='projects' component={Projects} />
      <Route path='contact' component={Contact} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
)

ReactDOM.render(router, document.getElementById('root'))
