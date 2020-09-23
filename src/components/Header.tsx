import React from 'react'
import { Grid, useMediaQuery, useTheme } from '@material-ui/core'
import styled from 'styled-components'
import { RevealFade } from 'src/components/Reveal'
import { HEADER_FONT, TEXT_SHADOW } from 'src/constants/styles'
import headerBackground from 'src/assets/header_background.jpg'

const SGridContainer = styled(props => <Grid container {...props} />)`
  position: relative;
  min-height: 100vh;
  background-image: url(${headerBackground});
`

const SGridItem = styled(props => <Grid item {...props} />)`
  z-index: 99;
  padding: 1rem;
  text-align: center;
  font-family: ${HEADER_FONT};
  text-shadow: ${TEXT_SHADOW};
  color: #fff;
`

const SCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(164, 102, 78, 0.6);
`

const SName = styled.h1<{ isXsAndDown: boolean }>`
  margin: 0 0 2rem 0;
  font-size: ${props => (props.isXsAndDown ? '3.75rem' : '5rem')};
`

const SGreeting = styled.h2`
  font-size: 1.75rem;
`

const Header: React.FC = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <SGridContainer direction="column" alignItems="center" justify="center">
      <SCover />
      <SGridItem item>
        <RevealFade direction="bottom">
          <SGreeting>Hello, I'm</SGreeting>
          <SName isXsAndDown={matches}>Nikki Quibin</SName>
        </RevealFade>
      </SGridItem>
    </SGridContainer>
  )
}

export default Header
