//@flow
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import Layout from 'Layout'
import Home from 'Home'
import PrivacyPolicy from 'PrivacyPolicy'
import TermsOfService from 'TermsOfService'

import 'assets/styles/global.css'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='privacy' component={PrivacyPolicy} />
      <Route path='terms' component={TermsOfService} />
    </Route>
  </Router>,
  document.getElementById('root')
)
