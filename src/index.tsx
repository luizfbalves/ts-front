import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'remixicon/fonts/remixicon.css'
import './index.css'
import 'typeface-roboto'

ReactDOM.render(
  <Fragment>
    <CssBaseline />
    <App />
  </Fragment>,
  document.getElementById('root')
)