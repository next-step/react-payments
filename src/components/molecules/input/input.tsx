import { forwardRef } from 'react'
import { Flex, FlexElements, FlexProps } from '@/components/atom/flex'
import { Box, BoxProps } from '@/components/atom/box'
import { Text, TextProps } from '@/components/atom/text'
import { PolymorphicRef } from '@/types'

/* -------------------------------------------------------------------------------------------------
 * InputLabel
 * -----------------------------------------------------------------------------------------------*/

export type InputLabelProps = Omit<TextProps<'label'>, 'ref'>
export const InputLabel = forwardRef((props: InputLabelProps, ref: PolymorphicRef<'label'>) => {
  return <Text as="label" ref={ref} {...props} />
})

/* -------------------------------------------------------------------------------------------------
 * InputWrapper
 * -----------------------------------------------------------------------------------------------*/

export type InputWrapperProps<C extends FlexElements> = Omit<FlexProps<C>, 'ref'>

export const InputWrapper = forwardRef(
  <C extends FlexElements = 'div'>(
    { children, ...rest }: InputWrapperProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    return (
      <Flex direction="column" ref={ref} {...rest}>
        {children}
      </Flex>
    )
  },
)

/* -------------------------------------------------------------------------------------------------
 * InputContent
 * -----------------------------------------------------------------------------------------------*/

export type InputContentProps = Omit<BoxProps<'input'>, 'ref' | 'id'> & {
  /** html input id attribute */
  id: BoxProps<'input'>['id']
}

export const InputContent = forwardRef((props: InputContentProps, ref: PolymorphicRef<'input'>) => {
  return <Box as="input" ref={ref} {...props} />
})

export const Input = {
  Label: InputLabel,
  Wrapper: InputWrapper,
  Content: InputContent,
}
