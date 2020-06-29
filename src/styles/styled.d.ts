import {} from 'styled-components'
import { Theme } from 'components-extra'

export interface StyledCompoProps {
  theme: Theme
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
