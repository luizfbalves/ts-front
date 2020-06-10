import React from 'react'
import { history } from './helpers/history'
import PrivateRoute from './auth/privateroute'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './views/pages/login'
import Home from './views/pages/home'

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/app" />
        </Route>
        <Route path="/login" component={Login} >
        </Route>
        <PrivateRoute component={Home} path="/app" />
      </Switch>
    </Router>
  )
}