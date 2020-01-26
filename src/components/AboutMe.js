import React from 'react'
import { Grid } from '@material-ui/core'

const AboutMe = () => (
  <Grid container>
    <Grid item xs={12}>
      <h1>About Me</h1>
    </Grid>
    <Grid item xs={12}>
      <p>
        I am a software developer, mainly focusing on web development. My
        preference is working on the frontend because of the visual aspect to
        it, but I also enjoy working on the backend, especially with databases.
        Recently, I've been getting into dev ops to learn more about system
        design, scaling, etc.
      </p>
      <p>
        I love programming since it allows me to build awesome applications that
        are useful, entertaining, and so much other things. As a kid, who
        enjoyed playing video games, I always felt that I would go into software
        development and I'm blessed that I'm making a career out of it. There's
        always new things to learn (a lot in the space of programming) and
        therefore I always try my best to learn something new each day.
      </p>
    </Grid>
    <Grid item xs={12}>
      <h2>Interests</h2>
    </Grid>
    <Grid item xs={12}>
      <div>
        <h3>Video Games</h3>
        <p>
          Been an avid gamer ever since I played games on the SNES. Currently I
          enjoy the Nintendo Switch and playing Pokemon.
        </p>
      </div>
      <div>
        <h3>Finance</h3>
        <p>
          The world of finance is astonishing. When I first learned about
          compound interest, it blew my mind. I'm heavily interested in personal
          finance and so I'm conscious on how to spend my money and build
          wealth.
        </p>
      </div>
      <div>
        <h3>Shoes</h3>
        <p>
          Usually I don't care too much about fashion but shoes is an exception.
          In particular, I adore sneakers because of its comfortability and
          unique styles. Checks over Stripes by the way!
        </p>
      </div>
    </Grid>
  </Grid>
)

export default AboutMe
