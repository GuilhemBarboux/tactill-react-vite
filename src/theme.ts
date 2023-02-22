import type { Theme } from 'theme-ui'
import preset from '@theme-ui/preset-system'

export const theme: Theme = {
  ...preset,
  config: {
    useColorSchemeMediaQuery: false,
    useLocalStorage: false,
    initialColorModeName: 'deep',
  },
  buttons: {
    secondary: {
      border: '1px solid',
      color: 'primary',
      bg: 'background',
      cursor: "pointer"
    },
  },
  layout: {
    container: {
      maxWidth: 1024,
      py: 2
    }
  },
  styles: {
    ...preset.styles,
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      tr: {
        '&.is-clickable': {
          cursor: 'pointer',
          '&:hover': {
            bg: 'highlight'
          }
        }
      },
      'th,td': {
        textAlign: 'left',
        p: 2,
        borderColor: 'primary',
        borderBottomStyle: 'solid',
      },
      th: {
        verticalAlign: 'bottom',
        borderBottomWidth: '2px',
        backgroundColor: 'primary',
      },
      td: {
        verticalAlign: 'top',
        borderBottomWidth: '1px',
      }
    },
  }
}
