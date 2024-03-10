import { textVariants } from '@/styles/variants.css.ts'
import { vars } from '@/styles'
import { style } from '@vanilla-extract/css'

export const inputContent = style({
  ...textVariants.body1,
  paddingBottom: vars.space['8px'],
  borderBottom: `1px solid ${vars.color.gray500}`,
  selectors: {
    ['&::placeholder']: {
      color: vars.color.gray300,
    },
  },
})
