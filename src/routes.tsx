import React from 'react'
import { history } from './helpers/history'
import PrivateRoute from './auth/privateroute'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import {
  Login,
  Home,
} from './views/pages'

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact path="/" to="/app" />

        <Route path="/login" component={Login} />

        <PrivateRoute component={Home} path="/app" />
      </Switch>
    </Router>
  )
}