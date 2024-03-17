import { vars } from '@/styles'
import { style } from '@vanilla-extract/css'

export const content = style({
  position: 'fixed',
  padding: vars.space['8px'],
  borderRadius: vars.radius['4px'],
})
