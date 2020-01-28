import React from 'react'
import { Grid, Divider, Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import { Text } from './Text'

const Header = () => (
  <Grid container direction="column">
    <Grid item>
      <Text variant="title">
        <span role="img" aria-label="wave emoji">
          👋
        </span>{' '}
        Hi, I'm Nikki&nbsp;Louis&nbsp;Quibin
      </Text>
      <Divider />
      <Text variant="subtitle">Software Developer</Text>
      <Button
        variant="outlined"
        startIcon={<PersonIcon />}
        href="https://google.ca"
        target="_blank"
      >
        Resume
      </Button>
    </Grid>
  </Grid>
)

export default Header
