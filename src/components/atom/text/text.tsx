import { forwardRef, type ElementType, ReactElement } from 'react'
import { clsx } from 'clsx'
import type {
  AtomicProps,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
  LayoutProps,
} from '@/types'
import { Box } from '../box'
import * as styles from './text.css'

interface TextStyleProps {
  /** css text-align property */
  textAlign?: AtomicProps['textAlign']
  /** Text 컴포넌트 색상 */
  color?: AtomicProps['color']
  /** css white-space property */
  whiteSpace?: AtomicProps['whiteSpace']
  /** css word-break property */
  wordBreak?: AtomicProps['wordBreak']
  /** css word-wrap property */
  wordWrap?: AtomicProps['wordWrap']
  /** text 컴포넌트 variant */
  variant?: styles.Variant
  /** overflow 발생시 말줄임표 적용 여부 */
  ellipsis?: styles.Ellipsis
  /** 밑줄 표시 여부 */
  underline?: styles.Underline
}

type TextElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'code'
  | 'div'
  | 'span'
  | 'p'
  | 'label'
  | 'a'

export type TextProps<C extends TextElement = 'div'> = PolymorphicComponentPropWithRef<
  C,
  TextStyleProps & LayoutProps
>

export type TextComponent = <C extends TextElement>(
  props: TextProps<C>,
) => ReactElement<TextProps<C>>

/** Text 컴포넌트 */
export const Text = forwardRef(
  <C extends TextElement>(
    {
      as,
      children,
      variant,
      ellipsis,
      underline,
      className,
      color = 'currentColor',
      ...rest
    }: TextProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    return (
      <Box
        as={as ?? ('div' as ElementType)}
        ref={ref}
        className={clsx(
          styles.textStyle({
            variant,
            ellipsis,
            underline,
          }),
          className,
        )}
        color={color}
        {...rest}
      >
        {children}
      </Box>
    )
  },
) as TextComponent
