import React from 'react'
import { Grid } from '@material-ui/core'

const Experience = () => (
  <Grid container>
    <Grid item>
      <h1>Skills & Experience</h1>
    </Grid>
    <Grid item>
      <h2>Frontend Technologies</h2>
      <p>
        My favourite is React and Vue, along with the powerful Webpack bundler.
        Currently I've been learning Gatsby, along with Contentful, and
        TypeScript for its static type-checking.
      </p>
    </Grid>
    <Grid item>
      <h2>Backend Technologies</h2>
      <p>
        I’m using the Serverless framework in Python which includes using AWS
        Lambdas. Moreover, other frameworks I’ve programmed with were
        CodeIgniter and Laravel for PHP, and Node.js with Express.js. In terms
        of architectures, I enjoy microservices but also I don't mind the
        monolith.
      </p>
    </Grid>
    <Grid item>
      <h2>Where I've Worked</h2>
    </Grid>
  </Grid>
)

export default Experience
