import {number, shape} from 'prop-types'
import Media from 'react-media'
import ResponsiveContext from './context'

const BREAKPOINT_MOBILE = 'mobile'
const BREAKPOINT_TABLET = 'tablet'
const BREAKPOINT_DESKTOP = 'desktop'

class Responsive extends React.Component {
  static Mobile =  props =>
    <ResponsiveContext.Consumer>
    {breakpoint => breakpoint === BREAKPOINT_MOBILE && props.children}
    </ResponsiveContext.Consumer>

  static Tablet = props => 
    <ResponsiveContext.Consumer>
      {breakpoint => breakpoint === BREAKPOINT_TABLET && pros.children}
    </ResponsiveContext.Consumer>

  static Desktop = props => 
    <ResponsiveContext.Consumer>
      {breakpoint => breakpoint === BREAKPOINT_DESKTOP && props.children}
    </ResponsiveContext.Consumer>

  static propTypes = {
    breakpoints: shape({
      mobile: number.isRequired,
      tablet: number.isRequired,
    })
  }

  static defaultProps = {
    breakpoints:  {
      mobile: 767,
      tablet: 1023,
    }
  }

  state = {breakpoint: ''}

  createHandler = breakpoint => ({matches}) => {
    if (matches) this.setState({breakpoint})
    return null
  }

  createQuery = breakpoint => ({mobile, tablet}) => {
    switch (breakpoint) {
      case BREAKPOINT_MOBILE:
        return {maxWidth: mobile}
      case BREAKPOINT_TABLET:
        return {minWidth: mobile+1, maxWidth: tablet}
      default:
    }
    return {minWidth: tablet+1}
  }

  render() {
    const {breakpoints} = this.props
    return <ResponsiveContext.Provider value={this.state.breakpoint}>
      <Media 
        onChange={this.createHandler(BREAKPOINT_MOBILE)}
        query={this.createQuery(BREAKPOINT_MOBILE)(breakpoints)} 
      />
      <Media 
        onChange={this.createHandler(BREAKPOINT_TABLET)}
        query={this.createQuery(BREAKPOINT_TABLET)(breakpoints)} 
      />
      <Media 
        onChange={this.createHandler(BREAKPOINT_DESKTOP)}
        query={this.createQuery(BREAKPOINT_DESKTOP)(breakpoints)} 
      />
      {this.props.children}
    </ResponsiveContext.Provider>
  }
}

export default Responsive
