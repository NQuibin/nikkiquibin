import React from 'react'
import { Grid, Divider, Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import PageContainer from './PageContainer'
import Text from './Text'

const Header = () => (
  <PageContainer container textCenter direction="column" alignItems="center">
    <Grid item xs={12}>
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
  </PageContainer>
)

export default Header
