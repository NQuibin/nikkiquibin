import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'
import { getIcon } from 'src/utils/getIcon'

const SIcon = styled.img`
  width: 28px;
  height: 28px;
  margin: 0 6px;
`

interface Props {
  name: string
}

const AssetIcon: React.FC<Props> = ({ name }) => {
  const [icon, setIcon] = useState()
  const { title, filename } = getIcon(name)

  useEffect(() => {
    const importIcon = async (): Promise<void> => {
      const importedIcon = await import(`src/assets/icons/${filename}`)
      setIcon(importedIcon.default)
    }
    importIcon()
  }, [filename])

  return (
    <Tooltip title={title} enterTouchDelay={0} aria-label={title}>
      <SIcon src={icon} alt={title} />
    </Tooltip>
  )
}

export default AssetIcon
