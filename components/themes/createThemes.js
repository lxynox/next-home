import base16Ocean from './base-16-ocean'
import paperColor from './paper-color'

const themePresets = {
  base16Ocean,
  paperColor,
}

export default (theme, name = 'default') => ({
  [name]: theme,
  ...themePresets
})
