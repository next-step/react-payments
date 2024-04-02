import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const content = style({
  padding: `${vars.space['56px']} 0`,
})

export const padGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: vars.space['4px'],
  backgroundColor: vars.color.gray100,
  padding: vars.space['12px'],
})

export const pad = style({
  border: `1px solid ${vars.color.gray100}`,
  background: vars.color.white,
  borderRadius: vars.radius['4px'],
})
