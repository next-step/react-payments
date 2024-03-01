import { forwardRef, createElement, type ElementType, ReactElement } from 'react'
import { clsx } from 'clsx'
import { inlineStylePropsSet } from '@/types'
import type {
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
  AtomicProps,
  InlineStyleProps,
} from '@/types'
import { sprinkles } from '@/styles'
import * as resetStyles from '@/styles/reset.css'

export type BoxProps<C extends ElementType = 'div'> = PolymorphicComponentPropWithRef<
  C,
  AtomicProps & InlineStyleProps
>

export type BoxComponent = <C extends ElementType = 'div'>(
  props: BoxProps<C>,
) => ReactElement<BoxProps<C>>

export const Box: BoxComponent = forwardRef(
  <C extends ElementType = 'div'>(
    { as, className, style, ...props }: BoxProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const atomsProps: Record<string, unknown> = {}
    const inlineStyleProps: Record<string, unknown> = {}
    const otherProps: Record<string, unknown> = {}

    for (const key in props) {
      if (sprinkles.properties.has(key as keyof AtomicProps)) {
        atomsProps[key] = props[key as keyof typeof props]
      } else if (inlineStylePropsSet.has(key as keyof InlineStyleProps)) {
        inlineStyleProps[key] = props[key as keyof typeof props]
      } else {
        otherProps[key] = props[key as keyof typeof props]
      }
    }

    const atomicClasses = clsx(
      resetStyles.base,
      resetStyles.element[as as keyof typeof resetStyles.element],
      sprinkles({
        ...atomsProps,
      }),
    )

    return createElement(as ?? 'div', {
      className: clsx(atomicClasses, className),
      style: { ...inlineStyleProps, ...style },
      ref,
      ...otherProps,
    })
  },
) as BoxComponent
