import {func} from 'prop-types'
import Toggle from 'react-toggle'
import defaultTheme from './presets/native'
import ThemeContext from './context'
import createThemes from './createThemes'

let defaultThemes = createThemes(defaultTheme)

class Theme extends React.Component {
  state = {themes: defaultThemes, isReversed: false}
  toggleTheme = () => {
    const nextIsReversed = !this.state.isReversed
    if (nextIsReversed) document.body.classList.add('.reversed')
    else document.body.classList.remove('.reversed')
    this.setState({isReversed: nextIsReversed})
  }
  get themes() {
    return {themes: this.state.themes, toggleTheme: this.toggleTheme}
  }
  render() {
    return <ThemeContext.Provider value={this.themes}>
      {this.props.children}
      <style jsx global>{`
        .reverse { color: ${defaultThemes.white}; backgroundColor: ${hemes.black} }
      `}</style>
    </ThemeContext.Provider>
  }
}

export default Theme

export const Colors = ({ theme, children }) =>
  <ThemeContext.Consumer>
  {({themes}) => typeof children === 'function'
    ? children(themes[theme])
    : children
  }
  </ThemeContext.Consumer>

Colors.propTypes = {
  chlidren: func.isRequired
}

Colors.defaultProps = {
  theme: 'default'
}

export const ThemeToggler = () =>
  <ThemeContext.Consumer>
  {({toggleTheme, themes}) =>
    <Toggle onChange={toggleTheme} />
  }
  </ThemeContext.Consumer>
