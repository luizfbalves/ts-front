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

//Use the function for your especific case
const testfnc = () => console.log('test')

// insert your dropdown configs
// no need to pass logout method
export const dropdown = [
  {
    index: 0,
    title: "Profile",
    callback: testfnc
  },
  {
    index: 1,
    title: "Settings",
    callback: testfnc
  },
]