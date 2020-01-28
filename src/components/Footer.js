import React from 'react'
import { Grid, Divider } from '@material-ui/core'
import { Text } from './Text'

const Footer = () => (
  <Grid container>
    <Grid item xs={12}>
      <Text>
        Interested in working with me? Contact me at{' '}
        <a href="mailto:nikki.quibin@gmail.com">nikki.quibin@gmail.com</a>.
      </Text>
      <Divider />
      <Text>
        <strong>Nikki Louis Quibin</strong>
      </Text>
      <Text>Created with React and Material UI</Text>
      <Text>
        © Copyright <strong>2010 - 2020</strong>
      </Text>
    </Grid>
  </Grid>
)

export default Footer
