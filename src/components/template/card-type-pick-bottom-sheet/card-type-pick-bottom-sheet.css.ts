import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const content = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: vars.space['24px'],
  padding: `${vars.space['56px']} ${vars.space['36px']}`,
})
