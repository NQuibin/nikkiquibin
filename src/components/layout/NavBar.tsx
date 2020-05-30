import React, { useState, SyntheticEvent } from 'react'
import styled from 'styled-components'
import {
  Grid,
  Box,
  Button,
  Slide,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, useLocation } from 'react-router-dom'

import Text from 'src/components/ui/Text'
import {
  TEXT_COLOUR,
  SECONDARY_TEXT_COLOUR,
  SECONDARY_FONT,
  DEFAULT_FONT_SIZE
} from 'src/constants/styles'

import resume from 'src/assets/nikki_quibin_resume_2020-02-06.pdf'

const StyledHeader = styled(Text)`
  font-size: ${DEFAULT_FONT_SIZE};
  font-weight: bold;
  font-family: ${SECONDARY_FONT};
  text-transform: uppercase;
`

const StyledMenuButton = styled(IconButton)`
  padding-right: 0;
  color: ${TEXT_COLOUR};

  &:hover {
    background-color: transparent;
  }
`

const StyledMenuItem = styled(MenuItem)`
  && {
    font-family: ${SECONDARY_FONT};
    font-weight: bold;
    background-color: ${props =>
      props.selected ? 'rgba(19,100,148, 0.1)' : 'transparent'};
  }
`

const StyledButton = styled(({ active, ...props }) => (
  <Button disableRipple {...props} />
))`
  margin-left: 4px;
  border-radius: 0;
  border-bottom: 2px solid
    ${props => (props.active ? SECONDARY_TEXT_COLOUR : 'transparent')};
  text-transform: capitalize;
  font-family: ${SECONDARY_FONT};
  font-weight: bold;

  &:hover {
    background-color: transparent;
  }
`

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null)
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const location = useLocation()
  const theme = useTheme()
  const showMobileNav = useMediaQuery(theme.breakpoints.down('xs'))

  const aboutMeLinkProps = {
    component: Link,
    to: '/'
  }
  const experienceLinkProps = {
    component: Link,
    to: '/experience'
  }
  const resumeLinkProps = {
    href: resume,
    target: '_blank'
  }

  const isLocationActive = (path: string): boolean => path === location.pathname

  const handleMenuClick = (event: SyntheticEvent): void => {
    setAnchorEl(event.currentTarget)
    setShowMenu(true)
  }

  const handleMenuClose = (): void => {
    setAnchorEl(null)
    setShowMenu(false)
  }

  const handleResumeMenuItemClick = (): void => {
    handleMenuClose()
    window.open(resumeLinkProps.href, '_blank')
  }

  return (
    <Slide in direction="down" timeout={400}>
      <Grid container alignItems="center">
        <Grid item>
          <StyledHeader
            variant="h1"
            textAlign="center"
            letterSpacing={5}
            mb={0}
          >
            Nikki Louis Quibin
          </StyledHeader>
        </Grid>
        <Box ml="auto">
          {showMobileNav ? (
            <>
              <StyledMenuButton disableRipple onClick={handleMenuClick}>
                <MenuIcon />
              </StyledMenuButton>
              <Menu
                keepMounted
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={showMenu}
                onClose={handleMenuClose}
              >
                <StyledMenuItem
                  {...aboutMeLinkProps}
                  selected={isLocationActive(aboutMeLinkProps.to)}
                  onClick={handleMenuClose}
                >
                  About Me
                </StyledMenuItem>
                <StyledMenuItem
                  {...experienceLinkProps}
                  selected={isLocationActive(experienceLinkProps.to)}
                  onClick={handleMenuClose}
                >
                  Experience
                </StyledMenuItem>
                <StyledMenuItem onClick={handleResumeMenuItemClick}>
                  Resume
                </StyledMenuItem>
              </Menu>
            </>
          ) : (
            <>
              <StyledButton
                {...aboutMeLinkProps}
                active={isLocationActive(aboutMeLinkProps.to)}
              >
                About me
              </StyledButton>
              <StyledButton
                {...experienceLinkProps}
                active={isLocationActive(experienceLinkProps.to)}
              >
                Experience
              </StyledButton>
              <StyledButton {...resumeLinkProps}>Resume</StyledButton>
            </>
          )}
        </Box>
      </Grid>
    </Slide>
  )
}

export default NavBar