import React from 'react'
import { Grid, Divider, Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';

const Header = () => (
  <Grid container direction="column">
    <Grid item>
      <h1>
        <span role="img" aria-label="wave emoji">
          👋
        </span>{' '}
        Hi, I'm Nikki&nbsp;Louis&nbsp;Quibin
      </h1>
      <Divider />
      <h2>Software Developer</h2>
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
