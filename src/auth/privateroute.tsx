import React from 'react'
import { logged } from './auth'
import { Route, Redirect, RouteProps } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => (
  <Route {...rest} render={(props) => {
    if (!Component) return null
    return (
      logged()
        ?
        <Component {...props} />
        :
        <Redirect to="/login" />
    )
  }} />
)

export default PrivateRoute