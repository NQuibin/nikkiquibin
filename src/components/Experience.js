import React from 'react'
import { Grid } from '@material-ui/core'
import Text from './common/Text'
import PageTitle from './PageTitle'

const Experience = () => (
  <Box container secondary>
    <Grid item>
      <PageTitle title="Skills & Experience" />
    </Grid>
    <Grid item>
      <Text variant="sectionTitle">Frontend Technologies</Text>
      <Text>
        My favourite is React and Vue, along with the powerful Webpack bundler.
        Currently I've been learning Gatsby, along with Contentful, and
        TypeScript for its static type-checking.
      </Text>
    </Grid>
    <Grid item>
      <Text variant="sectionTitle">Backend Technologies</Text>
      <Text>
        I’m using the Serverless framework in Python which includes using AWS
        Lambdas. Moreover, other frameworks I’ve programmed with were
        CodeIgniter and Laravel for PHP, and Node.js with Express.js. In terms
        of architectures, I enjoy microservices but also I don't mind the
        monolith.
      </Text>
    </Grid>
    <Grid item>
      <Text variant="subtitle">Where I've Worked</Text>
    </Grid>
  </Box>
)

export default Experience
