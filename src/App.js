import React from 'react'
import {
  Container,
  Box,
  CssBaseline,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from 'src/components/NavBar'
import AboutMe from 'src/components/AboutMe'
import Experience from 'src/components/Experience'
import Footer from 'src/components/Footer'
import { PRIMARY_COLOUR } from 'src/constants/styles'

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
  <BrowserRouter>
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
            <Switch>
              <Route exact path="/" component={AboutMe} />
              <Route path="/experience" component={Experience} />
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </Box>
          <Box px={4.5} py={2.25}>
            <Footer />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
