import base16Ocean from './presets/base-16-ocean'
import paperColor from './presets/paper-color'

const themePresets = {
  base16Ocean,
  paperColor,
}

export default (theme, name = 'default') => ({
  [name]: theme,
  ...themePresets,
})
