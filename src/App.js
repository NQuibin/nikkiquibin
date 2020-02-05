import React from 'react'
import {
  Container,
  Box,
  CssBaseline,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core'

import Navbar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import { PRIMARY_COLOUR } from './constants'

const theme = createMuiTheme({
  palette: {
    background: {
      default: PRIMARY_COLOUR
    }
  },
  typography: {
    fontFamily: [
      "'Merriweather'",
      '"Raleway"',
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
  }
})

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container disableGutters maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minHeight="100vh"
      >
        <Box px={4.5} py={2.25}>
          <Navbar />
        </Box>
        <Box px={4.5} py={2.25}>
          <AboutMe />
        </Box>
        <Box px={4.5} py={2.25}>
          <Footer />
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
)

export default App
