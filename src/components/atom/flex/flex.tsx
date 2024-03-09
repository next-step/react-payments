import { type ElementType, forwardRef } from 'react'
import { Box } from '@/components/atom/box'
import { AtomicProps, PolymorphicComponentPropWithRef, PolymorphicRef, LayoutProps } from '@/types'

export type FlexElements =
  | 'div'
  | 'section'
  | 'article'
  | 'aside'
  | 'header'
  | 'footer'
  | 'nav'
  | 'main'
  | 'form'
  | 'fieldset'
  | 'legend'
  | 'label'
  | 'details'
  | 'summary'
  | 'figure'
  | 'figcaption'
  | 'table'
  | 'caption'
  | 'tbody'
  | 'thead'
  | 'tr'
  | 'td'
  | 'th'
  | 'button'

interface FlexStyleProps {
  /** css gap property */
  gap?: AtomicProps['gap']
  /** css flex-direction property */
  direction?: AtomicProps['flexDirection']
  /** css align-items property */
  alignItems?: AtomicProps['alignItems']
  /** css justify-content property */
  justifyContent?: AtomicProps['justifyContent']
  /** css flex-wrap property */
  flexWrap?: AtomicProps['flexWrap']
  /** css flex-grow property */
  flexGrow?: AtomicProps['flexGrow']
  /** css flex-shrink property */
  flexShrink?: AtomicProps['flexShrink']
  /** css background-color property */
  backgroundColor?: AtomicProps['backgroundColor']
  /** css color property */
  color?: AtomicProps['color']
  /** css border-radius property */
  borderRadius?: AtomicProps['borderRadius']
  /** css position property */
  position?: AtomicProps['position']
  /** css border-top-left-radius property */
  borderTopLeftRadius?: AtomicProps['borderTopLeftRadius']
  /** css border-top-right-radius property */
  borderTopRightRadius?: AtomicProps['borderTopRightRadius']
  /** css border-bottom-left-radius property */
  borderBottomLeftRadius?: AtomicProps['borderBottomLeftRadius']
  /** css border-bottom-right-radius property */
  borderBottomRightRadius?: AtomicProps['borderBottomRightRadius']
  /** css cursor property */
  cursor?: AtomicProps['cursor']
}

export type FlexProps<C extends FlexElements = 'div'> = PolymorphicComponentPropWithRef<
  C,
  FlexStyleProps & LayoutProps
>

/** display flex 속성을 기본으로 가지는 레이아웃 컴포넌트 */
export const Flex = forwardRef(
  <C extends FlexElements = 'div'>(
    { children, as, direction, ...rest }: FlexProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    return (
      <Box
        as={(as ?? 'div') as ElementType}
        display="flex"
        flexDirection={direction}
        ref={ref}
        {...rest}
      >
        {children}
      </Box>
    )
  },
)
