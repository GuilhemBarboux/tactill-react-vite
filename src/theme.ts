import type { Theme } from 'theme-ui'
import preset from '@theme-ui/preset-system'
import { alpha } from '@theme-ui/color'

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
    close: {
      variant: 'buttons.secondary',
      position: 'absolute',
      right: 4,
      top: 3
    },
    refresh: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center"
    }
  },
  text: {
    heading: {
      mb: ".5em"
    }
  },
  layout: {
    container: {
      maxWidth: 1024,
      py: 2
    },
    side: {
      position: "relative",
      mr: 0,
      px: 4,
      pt: 4,
      width: "100%",
      height: "100%",
      maxWidth: "600px",
      overflowX: "hidden",
      overflowY: "scroll",
      background: "background"
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      backgroundColor: alpha('text', .4),
      zIndex: 1000
    }
  },
  styles: {
    ...preset.styles,
    table: {
      width: '100%',
      mb: 3,
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
        svg: {
          width: "1.5em",
          height: "1.5em"
        }
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
