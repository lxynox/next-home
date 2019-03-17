import { Fragment } from 'react'
import NavMenu from '../components/nav-menu'

export default ({ children }) => (
  <Fragment>
    <NavMenu />
    {children}
  </Fragment>
)
