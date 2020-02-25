import React from 'react'
import styled from 'styled-components'
import { Grid, Box, Button, Slide } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'

import Text from './common/Text'
import { SECONDARY_TEXT_COLOUR } from 'src/constants/styles'

const StyledHeader = styled(Text)`
  font-weight: bold;
  text-transform: uppercase;
`

const StyledButton = styled(({ active, ...props }) => <Button {...props} />)`
  margin-left: 4px;
  border-radius: 0;
  border-bottom: 2px solid
    ${props => (props.active ? SECONDARY_TEXT_COLOUR : 'transparent')};
  text-transform: capitalize;
  font-weight: bold;

  &:hover {
    background-color: transparent;
  }
`

const NavBar = () => {
  const location = useLocation()
  const isLocationActive = path => path === location.pathname

  return (
    <Slide in direction="down" timeout={400}>
      <Grid container alignItems="center">
        <Grid item>
          <StyledHeader textAlign="center" letterSpacing={5} mb={0}>
            Nikki Louis Quibin
          </StyledHeader>
        </Grid>
        <Box ml="auto">
          <StyledButton
            disableRipple
            component={Link}
            to="/"
            active={isLocationActive('/')}
          >
            About me
          </StyledButton>
          <StyledButton
            disableRipple
            active={isLocationActive('/experience')}
            component={Link}
            to="/experience"
          >
            Experience
          </StyledButton>
        </Box>
      </Grid>
    </Slide>
  )
}

export default NavBar
