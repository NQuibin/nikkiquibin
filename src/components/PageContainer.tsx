import React from 'react'
import { Box, Container } from '@material-ui/core'

const PageContainer: React.FC = ({ children }) => {
  return (
    <Container disableGutters maxWidth="md">
      <Box display="flex" flexDirection="column" textAlign="center">
        <Box px={4.5} py={2.25} my={8}>
          {children}
        </Box>
      </Box>
    </Container>
  )
}

export default PageContainer
