import { merge } from 'lodash'

const baseTheme = {
  palette: {
    inlineCode: '#cce0ff',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#b34700',
      light: '#ffc299',
    },
  },
}

export const lightTheme = merge({}, baseTheme, {
  palette: {
    type: 'light',
    links: '#0066cc',
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
    },
  },
})

export const darkTheme = merge({}, baseTheme, {
  palette: {
    type: 'dark',
    links: '#19b9d2',
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
    },
  },
})
