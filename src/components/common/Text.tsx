import React, { FC } from 'react'
import styled from 'styled-components'
import Box, { BoxProps } from '@material-ui/core/Box'
import {
  TEXT_COLOUR,
  SECONDARY_TEXT_COLOUR,
  PRIMARY_FONT,
  SECONDARY_FONT,
  DEFAULT_FONT_SIZE
} from 'src/constants/styles'

interface Variant {
  component: string,
  fontSize: string
  fontFamily?: string
}

const VARIANTS: { [index: string]: Variant } = {
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

const StyledBox = styled(
  ({ secondary, fontSize, fontFamily, icon, ...props }) => <Box {...props} />
)`
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

interface Props extends BoxProps {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'body'
  icon?: React.ReactNode
  secondary?: boolean
  className?: string
}

const Text: FC<Props> = ({
  children,
  variant = 'body',
  icon = null,
  secondary = false,
  className = '',
  ...props
}) => {
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

export default Text
