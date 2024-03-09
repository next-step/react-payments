import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const root = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
})

export const dimmer = style({
  backgroundColor: vars.color.dimBlack,
  height: '100%',
})

export const content = style({
  zIndex: vars.zIndex.above,
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: vars.color.white,
})
