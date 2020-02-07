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
import headshot from '../assets/headshot.jpg'
import resume from '../assets/nikki_quibin_resume_2020-02-06.pdf'

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

const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  border-radius: 100%;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.2);
`

const AboutMe = () => {
  const theme = useTheme()
  const spacing = useMediaQuery(theme.breakpoints.up('sm')) ? 3 : 0

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Box textAlign="center" pr={spacing}>
          <StyledImg src={headshot} alt="Nikki Quibin's headshot" />
          <StyledButton
            disableRipple
            variant="outlined"
            target="_blank"
            href={resume}
            startIcon={<PersonIcon />}
          >
            Resume
          </StyledButton>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Box pl={1.5}>
          <Text>
            <span role="img" aria-label="wave emoji">
              👋
            </span>
            Hi, I'm Nikki.
          </Text>
          <Text>
            I'm a software developer, mainly focusing on web development.
            Programming is one of my favourite things to do since it allows me
            to build awesome applications that are useful, entertaining, and so
            much more. As a kid who enjoyed video games, I always felt that I
            would want to have a career in tech and so I'm grateful to be given
            that opportunity.
          </Text>
          <Text>
            I believe in personal growth and the importance of being open minded
            about learning new things every day. The people around me inspire to
            do my best and are like-minded with the goal to succeed.
          </Text>
        </Box>
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
