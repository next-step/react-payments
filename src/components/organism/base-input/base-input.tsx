import { forwardRef, ReactElement } from 'react'
import { Flex } from '@/components/atom/flex'
import { Text } from '@/components/atom/text'
import { Input, InputContentProps } from '@/components/molecule/input'
import { populateBaseInputProps } from '@/components/organism/base-input/utils/populate-base-input-props.ts'
import { AtomicProps, PolymorphicComponentProp, PolymorphicRef } from '@/types'
import * as styles from './base-input.css.ts'
import { isNil } from '@/utils'
import { clsx } from 'clsx'

/* -------------------------------------------------------------------------------------------------
 * BaseInput
 * -----------------------------------------------------------------------------------------------*/

export interface BaseInputProps extends InputContentProps {
  /** input에 대한 label text */
  label?: string
  /** input의 우측 상단에 표시되는 text */
  helperText?: string
  /** 표시하고자 하는 에러 메시지  */
  error?: BaseInputBottomSectionProps['error']
  /** 에러 요소 커스텀 렌더 함수 */
  errorRender?: BaseInputBottomSectionProps['errorRender']
  /** Input.Content와 상단 사이의 간격 */
  topOffset?: AtomicProps['marginBottom']
  /** Input.Content와 하단 사이의 간격 */
  bottomOffset?: AtomicProps['marginTop']
  /** label이 포커스 맞춰야 할 input id */
  htmlFor?: PolymorphicComponentProp<'label'>['htmlFor']
}

export const BaseInput = forwardRef(
  ({ children, ...props }: BaseInputProps, ref: PolymorphicRef<'input'>) => {
    const { wrapperProps, baseInputTopSectionProps, contentProps, baseInputBottomSectionProps } =
      populateBaseInputProps(props)
    return (
      <Input.Wrapper {...wrapperProps}>
        <BaseInputTopSection {...baseInputTopSectionProps} />
        {children ?? <BaseInputContent ref={ref} {...contentProps} />}
        <BaseInputBottomSection {...baseInputBottomSectionProps} />
      </Input.Wrapper>
    )
  },
)

/* -------------------------------------------------------------------------------------------------
 * BaseInputContent
 * -----------------------------------------------------------------------------------------------*/

export interface BaseInputContentProps extends InputContentProps {}

export const BaseInputContent = forwardRef(
  (
    {
      borderTopRightRadius = '8px',
      borderTopLeftRadius = '8px',
      borderBottomLeftRadius = '8px',
      borderBottomRightRadius = '8px',
      className,
      ...props
    }: BaseInputContentProps,
    ref: PolymorphicRef<'input'>,
  ) => {
    return (
      <Input.Content
        {...props}
        ref={ref}
        borderTopRightRadius={borderTopRightRadius}
        borderTopLeftRadius={borderTopLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        borderBottomLeftRadius={borderBottomLeftRadius}
        className={clsx(styles.inputContent, className)}
      />
    )
  },
)

/* -------------------------------------------------------------------------------------------------
 * BaseInputTopSection
 * -----------------------------------------------------------------------------------------------*/

export interface BaseInputTopSectionProps {
  isLabelEnabled: boolean
  isHelperTextEnabled: boolean
  helperText?: BaseInputProps['helperText']
  label?: BaseInputProps['label']
  htmlFor?: BaseInputProps['htmlFor']
}

const BaseInputTopSection = ({
  isLabelEnabled,
  label,
  isHelperTextEnabled,
  helperText,
  htmlFor,
}: BaseInputTopSectionProps) => {
  const isTopSectionEnabled = isLabelEnabled || isHelperTextEnabled

  return isTopSectionEnabled ? (
    <Flex justifyContent="space-between" alignItems="center">
      {isLabelEnabled && (
        <Input.Label variant="body3" color="gray300" htmlFor={htmlFor}>
          {label}
        </Input.Label>
      )}
      {isHelperTextEnabled && (
        <Text variant="body3" color="gray300">
          {helperText}
        </Text>
      )}
    </Flex>
  ) : null
}

/* -------------------------------------------------------------------------------------------------
 * BaseInputBottomSection
 * -----------------------------------------------------------------------------------------------*/
export interface BaseInputBottomSectionProps {
  /** 표시하고자 하는 에러 메시지  */
  error?: string
  /** 에러 요소 커스텀 렌더 함수 */
  errorRender?: (error: string) => ReactElement
}

const BaseInputBottomSection = ({ error, errorRender }: BaseInputBottomSectionProps) => {
  const isBottomSectionEnabled = !isNil(error)

  return isBottomSectionEnabled ? (
    <Input.Error error={error} errorRender={errorRender} marginTop="4px" />
  ) : null
}
