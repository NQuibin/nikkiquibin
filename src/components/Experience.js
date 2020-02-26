import React from 'react'
import styled from 'styled-components'
import { Grid, Fade } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import DateRangeIcon from '@material-ui/icons/DateRange'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

import Text from 'src/components/common/Text'
import CustomIcon from 'src/components/common/CustomIcon'
import { jobs, education } from 'src/constants/experience'

const StyledExperienceGridContainer = styled(Grid)`
  padding-bottom: 36px;
`

const Experience = () => (
  <Fade in timeout={800}>
    <Grid container>
      <Grid item xs={12}>
        <Text secondary variant="h2">
          Where I've worked
        </Text>
      </Grid>
      <Grid item xs={12}>
        {jobs.map(job => (
          <StyledExperienceGridContainer container key={job.key}>
            <Grid item xs={12} sm={4}>
              <Text variant="h3">
                {job.company} | {job.position}
              </Text>
              <Text icon={<DateRangeIcon />}>{job.duration}</Text>
              <Text icon={<LocationOnIcon />}>{job.location}</Text>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Text>{job.description}</Text>
              {job.stack.map(item => (
                <CustomIcon iconName={item} key={item} />
              ))}
            </Grid>
          </StyledExperienceGridContainer>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Text secondary variant="h2">
          Where I've studied
        </Text>
      </Grid>
      <Grid item xs={12}>
        {education.map(edu => (
          <StyledExperienceGridContainer container key={edu.key}>
            <Grid item xs={12}>
              <Text variant="h3">{edu.institution}</Text>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Text icon={<DateRangeIcon />}>{edu.duration}</Text>
              <Text icon={<LocationOnIcon />}>{edu.location}</Text>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Text icon={<MenuBookIcon />}>{edu.major}</Text>
              <Text icon={<EmojiEventsIcon />}>{edu.degree}</Text>
            </Grid>
          </StyledExperienceGridContainer>
        ))}
      </Grid>
    </Grid>
  </Fade>
)

export default Experience
