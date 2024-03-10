import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { textVariants } from '@/styles/variants.css'

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
    variant: 'inherit',
    underline: false,
    ellipsis: false,
  },
})

export type TextStyleVariant = RecipeVariants<typeof textStyle>
export type Variant = NonNullable<TextStyleVariant>['variant']
export type Underline = NonNullable<TextStyleVariant>['underline']
export type Ellipsis = NonNullable<TextStyleVariant>['ellipsis']
