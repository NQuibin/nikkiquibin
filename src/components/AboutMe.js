import React from 'react'
import styled from 'styled-components'
import { Grid, Box, Button, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import PersonIcon from '@material-ui/icons/Person'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import FastfoodIcon from '@material-ui/icons/Fastfood'

import Text from './common/Text'
import {
  PRIMARY_COLOUR,
  SECONDARY_TEXT_COLOUR,
  SECONDARY_FONT
} from '../constants'

const StyledButton = styled(Button)`
  margin: 16px 0 48px 0;
  background-color: ${SECONDARY_TEXT_COLOUR};
  font-family: ${SECONDARY_FONT};
  color: ${PRIMARY_COLOUR};

  &:hover {
    background-color: ${SECONDARY_TEXT_COLOUR};
    opacity: 0.8;
  }
`

const AboutMe = () => {
  const theme = useTheme()
  const spacing = useMediaQuery(theme.breakpoints.up('sm')) ? 3 : 0

  return (
    <Grid container>
      <Grid item xs={12} sm={4} md={3}>
        <Box textAlign="center">
          <StyledButton
            disableRipple
            variant="outlined"
            startIcon={<PersonIcon />}
          >
            Resume
          </StyledButton>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <Text>
          <span role="img" aria-label="wave emoji">
            👋
          </span>
          Hi, I'm Nikki.
        </Text>
        <Text>
          I'm a software developer, mainly focusing on web development.
          Programming are one of my favourite things to do since it allows me to
          build awesome applications that are useful, entertaining, and so much
          more. As a kid who enjoyed video games, I always felt that I would
          want to have a career in tech and so I'm grateful to be given that
          opportunity.
        </Text>
      </Grid>
      <Grid item xs={12}>
        <Text secondary variant="h2">
          Some of my interests
        </Text>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={spacing}>
          <Grid item xs={12} sm={4}>
            <Text variant="h3" icon={<SportsEsportsIcon />}>
              Video games
            </Text>
            <Text>
              Been an avid gamer ever since I played games on the SNES.
              Currently I enjoy the Nintendo Switch and playing Pokemon. I'm
              looking forward to the next gen games.
            </Text>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Text variant="h3" icon={<MonetizationOnIcon />}>
              Finance
            </Text>
            <Text>
              The world of finance is astonishing. When I first learned about
              compound interest, it blew my mind. I'm heavily interested in
              personal finance and building wealth.
            </Text>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Text variant="h3" icon={<FastfoodIcon />}>
              Food
            </Text>
            <Text>
              I LOVE FOOD! I'm open minded to all types of food and always
              looking for new places to eat. My favourite is seafood, especially
              raw oysters. Let me know your food suggestions!
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AboutMe
