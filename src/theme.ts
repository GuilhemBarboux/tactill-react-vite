import type { Theme } from 'theme-ui'
import preset from '@theme-ui/preset-system'

export const theme: Theme = {
  ...preset
  ...preset,
  config: {
    useColorSchemeMediaQuery: false,
    useLocalStorage: false,
    initialColorModeName: 'deep',
    printColorModeName: 'default',
  },
}
