import React from 'react'
import styled from 'styled-components'
import { Grid, Divider } from '@material-ui/core'
import Text from './Text'

const StyledFooter = styled(Grid)`
  background-color: #D9D9D9;
  text-align: center;
`

const Footer = () => (
  <StyledFooter container direction="column" alignItems="center">
    <Grid item xs={12}>
      <Text>
        Interested in working with me? Contact me at{' '}
        <a href="mailto:nikki.quibin@gmail.com">nikki.quibin@gmail.com</a>.
      </Text>
      <Divider />
      <Text>
        <strong>Nikki Louis Quibin</strong>
      </Text>
      <Text>Created with React and Material UI</Text>
      <Text>
        © Copyright <strong>2010 - 2020</strong>
      </Text>
    </Grid>
  </StyledFooter>
)

export default Footer
