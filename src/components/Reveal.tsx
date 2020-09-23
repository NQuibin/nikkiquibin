import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'

interface Props {
  direction?: 'top' | 'right' | 'bottom' | 'left' | undefined
  duration?: number
}

export const RevealFade: React.FC<Props> = ({
  children,
  direction = undefined,
  duration = 400
}) => {
  return (
    <Fade triggerOnce cascade duration={duration} direction={direction}>
      {children}
    </Fade>
  )
}

export const RevealZoom: React.FC<Props> = ({
  children,
  direction = undefined,
  duration = 400
}) => {
  return (
    <Zoom triggerOnce cascade duration={duration} direction={direction}>
      {children}
    </Zoom>
  )
}
