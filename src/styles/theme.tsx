const createTheme = (isDark: boolean): object => ({
  palette: {
    inlineCode: '#cce0ff',
    links: isDark ? '#19b9d2' : '#0066cc',
    text: {
      primary: isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.87)',
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#b34700',
      light: '#ffc299',
    },
  },
})

export default createTheme
