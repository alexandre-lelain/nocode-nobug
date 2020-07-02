import {} from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    inlineCode: string
    blockquoteLink: string
  }

  interface PaletteOptions {
    inlineCode?: string
    blockquoteLink?: string
  }
}
