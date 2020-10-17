import {
  Receipts,
  Payments,
  Products,
} from './views/content'
import {
  Receipt,
  Payment,
  AllInbox,
} from '@material-ui/icons'

//Insert your content routes here
export const content = [
  {
    index: 0,
    title: "Receipts",
    route: "/app/receipts",
    component: Receipts,
    icon: Receipt
  },
  {
    index: 1,
    title: "Payments",
    route: "/app/payments",
    component: Payments,
    icon: Payment
  },
  {
    index: 2,
    title: "Products",
    route: "/app/products",
    component: Products,
    icon: AllInbox
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