import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

import Text from './common/Text'

const StyledHeader = styled(Text)`
  font-weight: bold;
  text-transform: uppercase;
`

const NavBar = () => (
  <Grid container>
    <Grid item xs={12}>
      <StyledHeader textAlign="center" letterSpacing={5} mb={0}>
        Nikki Louis Quibin
      </StyledHeader>
    </Grid>
  </Grid>
)

export default NavBar
