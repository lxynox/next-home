import {func} from 'prop-types'
import DEFAULT_THEME from './presets/native'
import ThemeContext from './context'
import createThemes from './createThemes'

let themes = createThemes(DEFAULT_THEME)

class Theme extends React.Component {
  state = {activeTheme: 'default'}

  handleChange = theme => this.setState({activeTheme: theme})

  get theme() {
    return {theme: themes[this.state.activeTheme], onChange: this.handleChange}
  }

  render() {
    return <ThemeContext.Provider value={this.theme}>
      {this.props.children}
    </ThemeContext.Provider>
  }
}

export default Theme

export const Colors = ({children}) =>
  <ThemeContext.Consumer>
  {({theme}) => typeof children === 'function'
    ? children(theme)
    : children
  }
  </ThemeContext.Consumer>

const OPTIONS = [{
  label: 'default theme',
  value: 'default'
}, {
  label: 'paper colors',
  value: 'paperColor'
}, {
  label: 'base 16 ocean',
  value: 'base16Ocean'
}]

export const ThemeSelect = () =>
  <ThemeContext.Consumer>
  {({onChange, theme}) =>
      <select 
        value={Object.keys(themes)[Object.values(themes).findIndex(t => t === theme)]} 
        onChange={({target: {value}}) => onChange(value)}>
      {OPTIONS.map(({label, value}) => <option key={value} value={value}>{label}</option>)}
    </select>
  }
  </ThemeContext.Consumer>
