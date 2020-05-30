import { SECONDARY_FONT } from 'src/constants/styles'

interface Variant {
  component: string,
  fontSize: string
  fontFamily?: string
}

export const variants: { [index: string]: Variant } = {
  h1: {
    component: 'h1',
    fontSize: '22px'
  },
  h2: {
    component: 'h2',
    fontSize: '20px',
    fontFamily: SECONDARY_FONT
  },
  h3: {
    component: 'h3',
    fontSize: '18px',
    fontFamily: SECONDARY_FONT
  },
  body: {
    component: 'p',
    fontSize: '16px'
  }
}