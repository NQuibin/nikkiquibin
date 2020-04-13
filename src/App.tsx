import React from 'react'
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core'
import { HashRouter, Switch, Route } from 'react-router-dom'

import PageContainer from 'src/components/layout/PageContainer'
import AboutMe from 'src/pages/AboutMe'
import Experience from 'src/pages/Experience'
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
  <HashRouter basename="/">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageContainer>
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/experience" component={Experience} />
        </Switch>
      </PageContainer>
    </ThemeProvider>
  </HashRouter>
)

export default App
