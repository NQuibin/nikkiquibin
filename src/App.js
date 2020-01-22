import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import Header from './components/Header'
import AboutMe from './components/AboutMe'

const App = () => (
  <>
    <CssBaseline />
    <Container>
      <Header />
      <AboutMe />
    </Container>
  </>
)

export default App
