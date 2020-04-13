import React, { FC } from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'

import { getIcon } from 'src/constants/icons'

const StyledImg = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 12px;
`

interface CustomIconProps {
  iconName: string
}

const CustomIcon: FC<CustomIconProps> = ({ iconName }) => {
  const icon = getIcon(iconName)

  return (
    <Tooltip title={icon.name} enterTouchDelay={0} aria-label={icon.name}>
      <StyledImg src={icon.src} alt={icon.name} />
    </Tooltip>
  )
}

export default CustomIcon
