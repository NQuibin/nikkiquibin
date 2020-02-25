import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import Text from './common/Text'
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from 'src/constants/styles'

const StyledBackground = styled.span`
  position: absolute;
  top: 0;
  left: -36px;
  display: block;
  width: ${props => props.size + 50}px;
  height: 45px;
  background-color: ${props =>
    props.secondary ? SECONDARY_COLOUR : PRIMARY_COLOUR};
  opacity: 0.7;
`

const StyledText = styled(Text)`
  z-index: 1;
`

const PageTitle = ({ title, secondary }) => {
  const box = useRef()
  const [boxSize, setBoxSize] = useState(0)

  useEffect(() => {
    setBoxSize(box.current.clientWidth)
  }, [box])

  return (
    <Box display="inline-flex" position="relative" ref={box}>
      <StyledText variant="title">{title}</StyledText>
      <StyledBackground secondary={secondary} size={boxSize} />
    </Box>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  secondary: PropTypes.bool
}

PageTitle.defaultProps = { secondary: false }

export default PageTitle
