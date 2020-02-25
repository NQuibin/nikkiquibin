import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Tooltip } from '@material-ui/core'

import { getIcon } from 'src/constants/experienceIcons'

const StyledImg = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 12px;
`

const CustomIcon = ({ iconName }) => {
  const icon = getIcon(iconName)
  return (
    <Tooltip title={icon.name} enterTouchDelay={0} aria-label={icon.name}>
      <StyledImg src={icon.src} alt={icon.name} />
    </Tooltip>
  )
}

CustomIcon.propTypes = { iconName: PropTypes.string.isRequired }

export default CustomIcon
