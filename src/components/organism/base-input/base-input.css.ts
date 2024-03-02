import { style } from '@vanilla-extract/css'
import { textVariants } from '@/styles/variants.css.ts'
import { vars } from '@/styles'

export const inputContent = style({
  ...textVariants.body1,
  padding: vars.space['12px'],
  borderRadius: vars.radius['8px'],
  backgroundColor: vars.color.gray100,
  color: vars.color.aqua,
  selectors: {
    ['&::placeholder']: {
      color: vars.color.gray300,
    },
  },
})
