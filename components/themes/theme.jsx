import {func} from 'prop-types'
import ThemeContext from './context'
import createThemes from './createThemes'
import defaultTheme from './native'

class Theme extends React.Component {
  themes = createThemes(defaultTheme)
  render() {
    return <ThemeContext.Provider value={this.themes}>{this.props.children}</ThemeContext.Provider>
  }
}

export default Theme

export const Colors = ({ theme, children }) => (
  <ThemeContext.Consumer>
  {themes => typeof children === 'function'
    ? children(themes[theme])
    : children
  }
  </ThemeContext.Consumer>
)

Colors.propTypes = {
  chlidren: func.isRequired
}

Colors.defaultProps = {
  theme: 'default'
}
