import React, { useEffect } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import PageContainer from 'src/components/PageContainer'
import Header from 'src/components/Header'
import About from 'src/components/About'
import Experience from 'src/components/Experience'
import Footer from 'src/components/Footer'
import Divider from 'src/components/Divider'
import baseTheme from 'src/themes/baseTheme'
import { initAnalytics } from 'src/utils/analytics'

const App: React.FC = () => {
  useEffect(() => { initAnalytics() })

  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Header />
      <PageContainer>
        <About />
        <Divider />
        <Experience />
      </PageContainer>
      <Footer />
    </ThemeProvider>
  )
}

export default App
