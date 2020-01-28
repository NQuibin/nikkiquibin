import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

const App = () => (
  <>
    <CssBaseline />
    <Container>
      <Header />
      <AboutMe />
      <Experience />
      <Portfolio />
      <Footer />
    </Container>
  </>
)

export default App
