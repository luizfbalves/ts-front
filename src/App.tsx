import React from 'react'
import Routes from './routes'
import {
  Receipts,
  Payments,
  Reports
} from './views/content'

//Insert your content routes here
export const content = [
  {
    index: 0,
    title: "Receipts",
    route: "/app/receipts",
    component: Receipts
  },
  {
    index: 1,
    title: "Payments",
    route: "/app/payments",
    component: Payments
  },
  {
    index: 2,
    title: "Reports",
    route: "/app/reports",
    component: Reports
  },
]

export default function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  )
}