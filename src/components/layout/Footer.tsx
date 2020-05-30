import React from 'react'
import styled from 'styled-components'
import { Box, IconButton, Divider, Grow } from '@material-ui/core'

import Text from 'src/components/ui/Text'
import {
  TEXT_COLOUR,
  PRIMARY_COLOUR,
  SECONDARY_TEXT_COLOUR,
  SECONDARY_FONT
} from 'src/constants/styles'
import { socialLinks } from 'src/constants/socialLinks'

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

const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${SECONDARY_TEXT_COLOUR};
`

const Footer = () => (
  <Grow in timeout={800}>
    <Box textAlign="center">
      <Divider />
      <Box m={2}>
        {socialLinks.map(socialLink => (
          <StyledIconButton
            key={socialLink.key}
            href={socialLink.href}
            aria-label={socialLink.label}
          >
            {socialLink.icon}
          </StyledIconButton>
        ))}
      </Box>
      <Text mb={1}>
        Contact me at{' '}
        <StyledAnchor href="mailto:nikki.quibin@gmail.com">
          nikki.quibin@gmail.com
        </StyledAnchor>
        .
      </Text>
      <Text mb={1}>Created with React and Material UI.</Text>
      <Text mb={0}>
        © Copyright <strong>{new Date().getFullYear()}</strong>.
      </Text>
    </Box>
  </Grow>
)

export default Footer
