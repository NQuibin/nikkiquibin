import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import {
  TEXT_COLOUR,
  SECONDARY_TEXT_COLOUR,
  PRIMARY_FONT,
  SECONDARY_FONT,
  DEFAULT_FONT_SIZE
} from '../../constants'

const VARIANTS = {
  h1: {
    component: 'h1',
    fontSize: '24px'
  },
  h2: {
    component: 'h2',
    fontSize: '20px',
    fontFamily: SECONDARY_FONT
  },
  h3: {
    component: 'h3',
    fontSize: '16px',
    fontFamily: SECONDARY_FONT
  },
  body: {
    component: 'p',
    fontSize: '14px'
  }
}

const StyledBox = styled(({ secondary, fontFamily, icon, ...props }) => (
  <Box {...props} />
))`
  line-height: 1.75;
  font-size: ${props => props.fontSize || DEFAULT_FONT_SIZE};
  font-family: ${props => props.fontFamily || PRIMARY_FONT};
  color: ${props => (props.secondary ? SECONDARY_TEXT_COLOUR : TEXT_COLOUR)};

  ${({ icon }) =>
    icon &&
    `
    display: flex;
    align-items: center;
    
    & svg {
      margin-right: 8px;
    }
  `}
`

const Text = ({ children, variant, icon, secondary, className, ...props }) => {
  const variantStyles = VARIANTS[variant || 'body']
  return (
    <StyledBox
      mt={0}
      mb={2}
      icon={icon}
      secondary={secondary}
      className={className}
      {...variantStyles}
      {...props}
    >
      {icon}
      {children}
    </StyledBox>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'body']),
  icon: PropTypes.node,
  secondary: PropTypes.bool,
  className: PropTypes.string
}

Text.defaultProps = {
  variant: 'body',
  icon: null,
  secondary: false,
  className: ''
}

export default Text
