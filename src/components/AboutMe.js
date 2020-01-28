import React from 'react'
import { Grid } from '@material-ui/core'
import { Text } from './Text'

const AboutMe = () => (
  <Grid container>
    <Grid item xs={12}>
      <Text variant="title">About Me</Text>
    </Grid>
    <Grid item xs={12}>
      <Text>
        I am a software developer, mainly focusing on web development. My
        preference is working on the frontend because of the visual aspect to
        it, but I also enjoy working on the backend, especially with databases.
        Recently, I've been getting into dev ops to learn more about system
        design, scaling, etc.
      </Text>
      <Text>
        I love programming since it allows me to build awesome applications that
        are useful, entertaining, and so much other things. As a kid, who
        enjoyed playing video games, I always felt that I would go into software
        development and I'm blessed that I'm making a career out of it. There's
        always new things to learn (a lot in the space of programming) and
        therefore I always try my best to learn something new each day.
      </Text>
    </Grid>
    <Grid item xs={12}>
      <Text variant="subtitle">Interests</Text>
    </Grid>
    <Grid item xs={12}>
      <div>
        <Text variant="sectionTitle">Video Games</Text>
        <Text>
          Been an avid gamer ever since I played games on the SNES. Currently I
          enjoy the Nintendo Switch and playing Pokemon.
        </Text>
      </div>
      <div>
        <Text variant="sectionTitle">Finance</Text>
        <Text>
          The world of finance is astonishing. When I first learned about
          compound interest, it blew my mind. I'm heavily interested in personal
          finance and so I'm conscious on how to spend my money and build
          wealth.
        </Text>
      </div>
      <div>
        <Text variant="sectionTitle">Shoes</Text>
        <Text>
          Usually I don't care too much about fashion but shoes is an exception.
          In particular, I adore sneakers because of its comfortability and
          unique styles. Checks over Stripes by the way!
        </Text>
      </div>
    </Grid>
  </Grid>
)

export default AboutMe
