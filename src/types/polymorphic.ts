// reference: https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/
import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from 'react'

export interface AsProp<C extends ElementType> {
  /** 마크업에서 보여줄 html 요소 */
  as?: C
}

export type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P)

export type PolymorphicComponentProp<
  C extends ElementType,
  Props = NonNullable<unknown>,
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<
    ComponentPropsWithoutRef<C>,
    PropsToOmit<
      C,
      Props & {
        color?: string
      }
    >
  >

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref']

export type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = NonNullable<unknown>,
> = PolymorphicComponentProp<C, Props> & {
  ref?: PolymorphicRef<C>
}
