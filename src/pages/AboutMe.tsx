import React from 'react'
import styled from 'styled-components'
import { Grid, Box, Fade, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import Text from 'src/components/ui/Text'
import { interests } from 'src/constants/interests'
import headshot from 'src/assets/headshot.jpg'

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
    <Fade in timeout={800}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box textAlign="center" pr={spacing} pb={3}>
            <StyledImg src={headshot} alt="Nikki Quibin's headshot" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box pl={spacing / 2}>
            <Text>
              <span role="img" aria-label="wave emoji">
                👋
              </span>{' '}
              Hi, I'm Nikki
            </Text>
            <Text>
              I'm a software developer, mainly focusing on web development.
              Programming is one of my favourite things to do since it allows me
              to build awesome applications that are useful, entertaining, and
              so much more. As a kid who enjoyed video games, I always felt that
              I would want to have a career in tech and so I'm grateful to be
              given that opportunity.
            </Text>
            <Text>
              I believe in personal growth with the importance of being open
              minded about learning new things every day. The people around me
              inspire and motivate me to do my best, and are like-minded with
              the goal to succeed.
            </Text>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Text secondary variant="h2" mt={4}>
            Some of my interests
          </Text>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={spacing}>
            {interests.map(interest => (
              <Grid item xs={12} sm={4} key={interest.key}>
                <Text variant="h3" icon={interest.icon}>
                  {interest.name}
                </Text>
                <Text>{interest.description}</Text>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  )
}

export default AboutMe