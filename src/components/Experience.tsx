import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { RevealFade } from 'src/components/Reveal'
import { SH2, SH3, SH4, SP } from 'src/components/Text'
import AssetIcon from 'src/components/AssetIcon'

interface ExperienceData {
  key: string
  name: string
  role: string
  location: string
  duration: string
  description: string
  stack: string[]
}

const experience: ExperienceData[] = [
  {
    key: 'patientpop',
    name: 'PatientPop',
    role: 'Software\u00a0Engineer',
    location: 'Santa Monica, CA (Remote)',
    duration: 'Oct. 2019 to Present',
    description: `An all-in-one practice growth solution software by automating 
      and enhancing the patient journey. Currently developing microservices 
      to allow practices to manage their patients.`,
    stack: ['vue', 'python', 'postgreSQL', 'awsLambda'],
  },
  {
    key: 'loopio',
    name: 'Loopio',
    role: 'Software\u00a0Developer',
    location: 'Toronto, ON',
    duration: 'Jun. 2018 to Oct. 2019',
    description: `Software to streamline the way organizations respond to RFPs, 
      DDQs, and Security Questionnaires. My team created third party 
      integrations (Slack, Salesforce, MS Dynamics, etc), reports, and 
      dashboards.`,
    stack: ['react', 'codeIgniter', 'mySQL', 'apache'],
  },
  {
    key: 'CRA',
    name: 'Canada\u00a0Revenue\u00a0Agency',
    role: 'Program\u00a0Officer',
    location: 'Toronto, ON',
    duration: 'May 2017 to Jun. 2018',
    description: `Agency for the Government of Canada that administer tax laws 
      (the IRS of Canada). My role was to develop tools and macros to help 
      auditors automate their daily tasks.`,
    stack: ['visualBasic', 'msOffice', 'python'],
  },
  {
    key: 'DRDC',
    name: 'Defense\u00a0Research Development\u00a0of\u00a0Canada',
    role: 'Research\u00a0Assistant',
    location: 'Toronto, ON',
    duration: 'Jan. 2017 to Mar. 2017',
    description: `The Department of National Defense for the Government of 
      Canada. I helped researchers create applications to record and analyze 
      their result data.`,
    stack: ['java'],
  },
]

const SDivider = styled.span`
  font-weight: normal;
`

const Experience: React.FC = () => {
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12}>
        <RevealFade direction="bottom">
          <SH2>Where I've Worked.</SH2>
        </RevealFade>
      </Grid>
      {experience.map((exp, i) => (
        <Grid item xs={12} sm={5} key={exp.key}>
          <RevealFade direction={i % 2 === 0 ? 'left' : 'right'}>
            <SH3>
              {exp.name} <SDivider>|</SDivider> {exp.role}
            </SH3>
            <SH4>{exp.location}</SH4>
            <SH4>{exp.duration}</SH4>
            <SP>{exp.description}</SP>
            <div>
              {exp.stack.map(name => (
                <AssetIcon key={name} name={name} />
              ))}
            </div>
          </RevealFade>
        </Grid>
      ))}
    </Grid>
  )
}

export default Experience
