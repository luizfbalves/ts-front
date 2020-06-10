import React, { Fragment } from 'react'
import styled from 'styled-components'
import PrivateRoute from '../auth/privateroute'
import { Receipts, Payments, Reports } from '../views/content'

//Components
const Feed = styled.div`
padding: 10px 10px 10px 10px;
display: flex;
width : calc(100% - 12rem);
height: 100%;
width: 100%;
background-color: whitesmoke;
margin: 5px 5px 0px 5px;
border-radius: 10px;
@media(max-width: 800px) {
width: 100%;
margin: 5px 5px 0px 5px;
}
`

export default function Component() {

  return (
    <Fragment>
      <Feed>
        <PrivateRoute path="/app/receipts" component={Receipts} />
        <PrivateRoute path="/app/payments" component={Payments} />
        <PrivateRoute path="/app/reports" component={Reports} />
      </ Feed>
    </Fragment>
  )
}