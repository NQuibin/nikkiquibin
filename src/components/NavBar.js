import React from 'react'
import styled from 'styled-components'
import { Grid, Slide } from '@material-ui/core'

import Text from './common/Text'

const StyledHeader = styled(Text)`
  font-weight: bold;
  text-transform: uppercase;
`

const NavBar = () => (
  <Slide in direction="down" timeout={400}>
    <Grid container>
      <Grid item xs={12}>
        <StyledHeader textAlign="center" letterSpacing={5} mb={0}>
          Nikki Louis Quibin
        </StyledHeader>
      </Grid>
    </Grid>
  </Slide>
)

export default NavBar
