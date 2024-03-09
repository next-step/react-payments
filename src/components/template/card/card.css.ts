import { textVariants } from '@/styles/variants.css.ts'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/styles'

export const CardContainer = recipe({
  base: {
    color: vars.color.gray500,
    borderRadius: vars.space['4px'],
    cursor: 'pointer',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
  },
  variants: {
    size: {
      lg: {
        width: '300px',
        padding: ` ${vars.space['8px']} ${vars.space['20px']}`,
      },
      md: {
        width: '230px',
        padding: ` ${vars.space['8px']} ${vars.space['14px']}`,
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const CardHeader = recipe({
  variants: {
    size: {
      lg: {
        marginBottom: vars.space['40px'],
      },
      md: {
        marginBottom: vars.space['20px'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const CardBody = recipe({
  variants: {
    size: {
      lg: {
        width: '55px',
        height: '35px',
        marginBottom: vars.space['20px'],
      },
      md: {
        width: '40px',
        height: '26px',
        marginBottom: vars.space['14px'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const CardFooter = recipe({
  variants: {
    size: {
      lg: {
        ...textVariants.title1,
        gap: vars.space['16px'],
      },
      md: {
        ...textVariants.title2,
        gap: vars.space['12px'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type CardVariant = RecipeVariants<typeof CardHeader>

export type Size = NonNullable<CardVariant>['size']
