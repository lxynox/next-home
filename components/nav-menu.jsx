import Menus from 'react-burger-menu'
import merge from 'lodash/merge'
import Media from 'react-media'

import NavImage from './nav-image'
import Links from './links'

const NAV_LINKS = [{
  href: '/',
  label: 'Home'
}, { 
  href: '/about',
  label: 'About' 
}, {
  href: '/timeline',
  label: 'Timeline'
}, { 
  href: '/contact',
  label: 'Contact' 
}, { 
  href: '/blog',
  label: 'Blog' 
}]

const NavLinks = props => <Links links={NAV_LINKS} {...props} />

const DesktopMenu = () => ( 
  <div>
    <NavImage />
    <NavLinks inline />
    <style jsx>{`
      .menu {
        background: mintcream;
        position: sticky;
        padding: 10px 0;
        top: 0;
      }
    `}</style>
  </div>
)

const MobileMenu = ({type, right, children, ...rest}) => {
  const Menu = Menus[type]

  let styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  if (right) {
    merge(styles, {
      bmBurgerButton: {
        right: '36px',
        left: 'none',
      }, 
      bmCrossButton: {
        right: 'none'
      },
    })
  }

  return (
    <Menu styles={styles} right {...rest}>
      <NavLinks isMobile />
      {children}
    </Menu>
  )
}

MobileMenu.defaultProps = {
  type: 'pushRotate'
}

const BREAKPOINT_MOBILE = 767

const BREAKPOINT_DESKTOP = 1024

const NavMenu = () => (
  <>
    <Media query={{maxWidth: BREAKPOINT_MOBILE}} render={() => <MobileMenu right />} />
    <Media query={{minWidth: BREAKPOINT_MOBILE+1}} render={() => <DesktopMenu />} />
  </>
) 

export default NavMenu
