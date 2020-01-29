import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { PAGE_COLOUR } from '../constants'

const PageContainer = styled(Grid)`
  margin-bottom: 36px;
  padding: 24px;
  background-color: ${PAGE_COLOUR};
  text-align: ${props => (props.textCenter ? 'center' : 'left')};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export default PageContainer
