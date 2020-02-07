import React from 'react'
import styled from 'styled-components'
import { Box, IconButton, Divider } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'

import Text from './common/Text'
import {
  TEXT_COLOUR,
  PRIMARY_COLOUR,
  SECONDARY_TEXT_COLOUR,
  SECONDARY_FONT
} from '../constants'

const StyledIconButton = styled(props => (
  <IconButton disableRipple target="_blank" {...props} />
))`
  margin: 0 4px;
  padding: 4px;
  background-color: ${TEXT_COLOUR};
  color: ${PRIMARY_COLOUR};

  &:hover {
    background-color: ${TEXT_COLOUR};
    opacity: 0.8;
  }
`

const StyledText = styled(Text)`
  font-family: ${SECONDARY_FONT};
`

const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${SECONDARY_TEXT_COLOUR};
`

const Footer = () => (
  <Box textAlign="center">
    <Divider />
    <Box m={2}>
      <StyledIconButton
        disableRipple
        href="https://www.linkedin.com/in/nikki-louis-quibin-539ba796/"
        aria-label="linked in"
      >
        <LinkedInIcon />
      </StyledIconButton>
      <StyledIconButton
        href="https://www.instagram.com/nik._q/?hl=en"
        aria-label="instagram"
      >
        <InstagramIcon />
      </StyledIconButton>
      <StyledIconButton
        href="https://github.com/NQuibin"
        aria-label="github"
      >
        <GitHubIcon />
      </StyledIconButton>
    </Box>
    <StyledText mb={1}>
      Contact me at{' '}
      <StyledAnchor href="mailto:nikki.quibin@gmail.com">
        nikki.quibin@gmail.com
      </StyledAnchor>
      .
    </StyledText>
    <StyledText mb={1}>Created with React and Material UI.</StyledText>
    <StyledText mb={0}>
      © Copyright <strong>2010 - 2020</strong>.
    </StyledText>
  </Box>
)

export default Footer
