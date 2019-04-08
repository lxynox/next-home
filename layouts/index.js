import { Fragment } from 'react'
import { node } from 'prop-types'
import NavMenu from '../components/nav-menu'

const Layout = ({ children }) => (
  <Fragment>
    <NavMenu />
    {children}
  </Fragment>
)

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
