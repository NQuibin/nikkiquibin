import React, { FC } from 'react'
import { Switch } from 'react-router-dom'
import { Box, Container } from '@material-ui/core'
import NavBar from 'src/components/layout/NavBar'
import Footer from 'src/components/layout/Footer'

interface PageContainerProps {
  children: React.ReactElement<Switch>
}

const PageContainer: FC<PageContainerProps> = ({ children }) => (
  <Container disableGutters maxWidth="md">
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box px={4.5} py={2.25}>
        <NavBar />
      </Box>
      <Box px={4.5} py={2.25}>
        {children}
      </Box>
      <Box px={4.5} py={2.25}>
        <Footer />
      </Box>
    </Box>
  </Container>
)

export default PageContainer
