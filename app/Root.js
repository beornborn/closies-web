//@flow
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import Home from 'Home'

import 'assets/styles/global.css'

render(
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
)
