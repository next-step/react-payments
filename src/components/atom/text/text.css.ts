import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/styles'

export const textVariants = {
  heading1: {
    fontSize: vars.fontSize['24px'],
    fontWeight: vars.fontWeight.bold,
    lineHeight: vars.lineHeight['1.5'],
  },
  heading2: {
    fontSize: vars.fontSize['20px'],
    fontWeight: vars.fontWeight.bold,
    lineHeight: vars.lineHeight['1.5'],
  },
  title1: {
    fontSize: vars.fontSize['18px'],
    fontWeight: vars.fontWeight.bold,
    lineHeight: vars.lineHeight['1.4'],
  },
  title2: {
    fontSize: vars.fontSize['16px'],
    fontWeight: vars.fontWeight.bold,
    lineHeight: vars.lineHeight['1.4'],
  },
  title3: {
    fontSize: vars.fontSize['14px'],
    fontWeight: vars.fontWeight.bold,
    lineHeight: vars.lineHeight['1.4'],
  },
  title4: {
    fontSize: vars.fontSize['12px'],
    fontWeight: vars.fontWeight.bold,
    lineHeight: vars.lineHeight['1.4'],
  },
  body1: {
    fontSize: vars.fontSize['16px'],
    fontWeight: vars.fontWeight.regular,
    lineHeight: vars.lineHeight['1.375'],
  },
  body2: {
    fontSize: vars.fontSize['14px'],
    fontWeight: vars.fontWeight.regular,
    lineHeight: vars.lineHeight['1.375'],
  },
  body3: {
    fontSize: vars.fontSize['12px'],
    fontWeight: vars.fontWeight.regular,
    lineHeight: vars.lineHeight['1.375'],
  },
  caption1: {
    fontSize: vars.fontSize['12px'],
    fontWeight: vars.fontWeight.medium,
    lineHeight: vars.lineHeight['1.3'],
  },
  caption2: {
    fontSize: vars.fontSize['10px'],
    fontWeight: vars.fontWeight.medium,
    lineHeight: vars.lineHeight['1.3'],
  },
}

export const textStyle = recipe({
  variants: {
    variant: textVariants,
    underline: {
      true: {
        textDecoration: 'underline',
      },
    },
    ellipsis: {
      true: style({
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }),
    },
  },
  defaultVariants: {
    variant: 'body1',
    underline: false,
    ellipsis: false,
  },
})

export type TextStyleVariant = RecipeVariants<typeof textStyle>
export type Variant = NonNullable<TextStyleVariant>['variant']
export type Underline = NonNullable<TextStyleVariant>['underline']
export type Ellipsis = NonNullable<TextStyleVariant>['ellipsis']
