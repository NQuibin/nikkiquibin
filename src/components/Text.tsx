import React from 'react'
import styled from 'styled-components'
import {
  PRIMARY_COLOUR,
  SECONDARY_COLOUR,
  PRIMARY_FONT,
} from 'src/constants/styles'

export const SH2 = styled.h2`
  color: ${PRIMARY_COLOUR};
  font-family: ${PRIMARY_FONT};
  font-size: 1.5rem;
  font-style: italic;
`

export const SH3 = styled(props => <SH2 as="h3" {...props} />)`
  color: ${SECONDARY_COLOUR};
  font-size: 1.3rem;
`

export const SH4 = styled(props => <SH2 as="h4" {...props} />)`
  font-size: 1.15rem;
  font-weight: normal;
  color: #000;
`

export const SP = styled.p`
  font-size: 1.1rem;
`
