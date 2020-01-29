import React from 'react'
import {
  Container,
  CssBaseline,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Nunito"',
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
    <Container>
      <Header />
      <AboutMe />
      <Experience />
      <Portfolio />
    </Container>
    <Footer />
  </ThemeProvider>
)

export default App
