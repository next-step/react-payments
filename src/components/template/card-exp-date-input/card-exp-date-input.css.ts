import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr 6px 1fr',
  width: '100%',
  position: 'relative',
})
