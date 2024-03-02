import { forwardRef, ReactNode } from 'react'
import { Flex } from '@/components/atom/flex'
import { Text } from '@/components/atom/text'
import { Input, InputContentProps } from '@/components/molecules/input'
import { populateBaseInputProps } from '@/components/organism/base-input/utils/populate-base-input-props.ts'
import { AtomicProps, PolymorphicRef } from '@/types'
import * as styles from './base-input.css.ts'

export interface BaseInputProps extends InputContentProps {
  /** input에 대한 label text */
  label?: string
  /** input의 우측 상단에 표시되는 text */
  helperText?: string
  /** error 요소 */
  error?: ReactNode
  /** Input.Content와 상단 사이의 간격 */
  topOffset?: AtomicProps['marginBottom']
  /** Input.Content와 하단 사이의 간격 */
  bottomOffset?: AtomicProps['marginTop']
}

export const BaseInput = forwardRef((props: BaseInputProps, ref: PolymorphicRef<'input'>) => {
  const { wrapperProps, baseInputTopSectionProps, contentProps, error } =
    populateBaseInputProps(props)

  return (
    <Input.Wrapper {...wrapperProps}>
      <BaseInputTopSection {...baseInputTopSectionProps} />
      <Input.Content ref={ref} className={styles.inputContent} {...contentProps} />
      {error}
    </Input.Wrapper>
  )
})

export interface BaseInputTopSectionProps {
  isTopSectionEnabled: boolean
  isLabelEnabled: boolean
  label?: BaseInputProps['label']
  isHelperTextEnabled: boolean
  helperText?: BaseInputProps['helperText']
  htmlFor?: BaseInputProps['id']
}

export const BaseInputTopSection = ({
  isTopSectionEnabled,
  isLabelEnabled,
  label,
  isHelperTextEnabled,
  helperText,
  htmlFor,
}: BaseInputTopSectionProps) => {
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
