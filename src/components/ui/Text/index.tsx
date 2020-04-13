import React, { FC } from 'react'
import styled from 'styled-components'
import Box, { BoxProps } from '@material-ui/core/Box'

import {
  TEXT_COLOUR,
  SECONDARY_TEXT_COLOUR,
  PRIMARY_FONT,
  DEFAULT_FONT_SIZE
} from 'src/constants/styles'
import { variants } from 'src/components/ui/Text/variants'

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

interface TextProps extends BoxProps {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'body'
  icon?: React.ReactNode
  secondary?: boolean
  className?: string
}

const Index: FC<TextProps> = ({
  children,
  variant = 'body',
  icon = null,
  secondary = false,
  className = '',
  ...props
}) => {
  const variantStyles = variants[variant || 'body']
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

export default Index
