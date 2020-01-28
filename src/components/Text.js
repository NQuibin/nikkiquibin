/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const VARIANT_MAPPING = {
  title: {
    as: 'h1',
    fontSize: '24px'
  },
  subtitle: {
    as: 'h2',
    fontSize: '20px'
  },
  sectionTitle: {
    as: 'h3',
    fontSize: '16px'
  },
  sm: {
    as: 'p',
    fontSize: '12px'
  }
}

const StyledText = styled.p`
  font-size: ${props => props.fontSize || '14px'};
`

const Text = ({ variant, children }) => {
  const variantOptions = VARIANT_MAPPING[variant]
  return <StyledText {...variantOptions}>{children}</StyledText>
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['title', 'subtitle', 'sectionTitle', 'sm'])
}

Text.defaultProps = { variant: null }

export { Text }
