import styled from 'styled-components'

const Text = styled.p`
  font-size: ${props => {
    switch (true) {
      case props.fontSize:
        return props.fontSize
      case props.sm:
        return '12px'
      case props.xs:
        return '10px'
      default:
        return '14px'
    }
  }};
`

const Title = styled.h1`
  font-size: 24px;
`

const Subtitle = styled.h2`
  font-size: 18px;
`

const SectionTitle = styled.h3`
  font-size: 16px;
`

/* eslint-disable import/prefer-default-export */
export { Title, Subtitle, SectionTitle, Text }
