import React from 'react'
import styled from 'styled-components'
import { Box, IconButton, Button, Grid } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import DescriptionIcon from '@material-ui/icons/Description'
import PageContainer from 'src/components/PageContainer'
import { RevealFade } from 'src/components/Reveal'
import { SH2 } from 'src/components/Text'
import { PRIMARY_COLOUR } from 'src/constants/styles'
import resume from 'src/assets/nikki_quibin_resume_2020-09-09.pdf'
import { trackEvent } from 'src/utils/analytics'

interface LinkData {
  key: string
  href: string
  label: string
  icon: React.ReactNode
}

const links: LinkData[] = [
  {
    key: 'linked-in',
    href: 'https://www.linkedin.com/in/nikki-louis-quibin-539ba796/',
    label: 'Linked In',
    icon: <LinkedInIcon />,
  },
  {
    key: 'github',
    href: 'https://github.com/NQuibin',
    label: 'GitHub',
    icon: <GitHubIcon />,
  },
  {
    key: 'resume',
    href: resume,
    label: 'Resume',
    icon: <DescriptionIcon />,
  },
]

const SWrapper = styled(Box)`
  background-color: ${PRIMARY_COLOUR};
  color: #fff;
`

const SMessage = styled(SH2)`
  margin: 0;
  color: #fff;
`

const SEmailButton = styled(Button)`
  margin: 1rem 0;
  background-color: ${PRIMARY_COLOUR};
  color: #fff;
  border: 1px solid #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  span {
    align-items: flex-start;
  }
`

const SIconLink = styled(props => <IconButton target="_blank" {...props} />)`
  color: #fff;

  &:hover {
    background-color: #fff;
    color: ${PRIMARY_COLOUR};
  }
`

const SCopyright = styled.p`
  margin: 18px 0 0 0;

  span {
    font-weight: bold;
  }
`

const Footer: React.FC = () => {
  const track = (link: LinkData) => {
    trackEvent('External Link', 'Click', link.label)
  }

  return (
    <RevealFade direction="top">
      <SWrapper>
        <PageContainer>
          <Grid container>
            <Grid item xs={12}>
              <SMessage>
                I'm available for freelance work! Let's get in touch.
              </SMessage>
              <SEmailButton
                variant="contained"
                href="mailto:nikki.quibin@gmail.com"
                startIcon={<MailOutlineIcon />}
              >
                Email Me
              </SEmailButton>
            </Grid>
            <Grid item xs={12}>
              {links.map(link => (
                <SIconLink
                  key={link.key}
                  href={link.href}
                  title={link.label}
                  aria-label={link.label}
                  onClick={() => track(link)}
                >
                  {link.icon}
                </SIconLink>
              ))}
            </Grid>
            <Grid item xs={12}>
              <SCopyright>
                © 2020 <span>Nikki Quibin</span>. All rights reserved.
              </SCopyright>
            </Grid>
          </Grid>
        </PageContainer>
      </SWrapper>
    </RevealFade>
  )
}

export default Footer
