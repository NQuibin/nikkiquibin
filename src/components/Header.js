import React from 'react'
import { Grid, Divider, Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import { Title, Subtitle } from './StyledText'

const Header = () => (
  <Grid container direction="column">
    <Grid item>
      <Title>
        <span role="img" aria-label="wave emoji">
          👋
        </span>{' '}
        Hi, I'm Nikki&nbsp;Louis&nbsp;Quibin
      </Title>
      <Divider />
      <Subtitle>Software Developer</Subtitle>
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
