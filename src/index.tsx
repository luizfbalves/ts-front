import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'remixicon/fonts/remixicon.css'
import './index.css'
import 'typeface-roboto'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)