import React from 'react'
import styled from 'styled-components'
import { Grid, Box, Button, Fade, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import PersonIcon from '@material-ui/icons/Person'

import Text from 'src/components/common/Text'
import { interests } from 'src/constants/interests'
import { SECONDARY_TEXT_COLOUR, SECONDARY_FONT } from 'src/constants/styles'
import headshot from 'src/assets/headshot.jpg'
import resume from 'src/assets/nikki_quibin_resume_2020-02-06.pdf'

const StyledButton = styled(props => <Button target="_blank" {...props} />)`
  margin: 16px 0 48px 0;
  font-family: ${SECONDARY_FONT};
  color: ${SECONDARY_TEXT_COLOUR};
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
    <Fade in timeout={800}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box textAlign="center" pr={spacing}>
            <StyledImg src={headshot} alt="Nikki Quibin's headshot" />
            <StyledButton
              disableRipple
              href={resume}
              startIcon={<PersonIcon />}
            >
              Resume
            </StyledButton>
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
          <Text secondary variant="h2">
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
