import { createMuiTheme } from '@material-ui/core'
import { Theme } from '@material-ui/core'
import { BACKGROUND_COLOUR } from 'src/constants/styles'

const baseTheme: Theme = createMuiTheme({
  palette: {
    background: {
      default: BACKGROUND_COLOUR
    }
  },
  typography: {
    fontFamily: [
      '"Catamaran"',
      '"Lato"',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1rem",
      }
    }
  }
})

export default baseTheme
