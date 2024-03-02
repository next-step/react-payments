import { forwardRef, ReactElement } from 'react'
import { Flex } from '@/components/atom/flex'
import { Text } from '@/components/atom/text'
import { Input, InputContentProps } from '@/components/molecule/input'
import { populateBaseInputProps } from '@/components/organism/base-input/utils/populate-base-input-props.ts'
import { AtomicProps, PolymorphicRef } from '@/types'
import * as styles from './base-input.css.ts'
import { isNil } from '@/utils'

/* -------------------------------------------------------------------------------------------------
 * BaseInput
 * -----------------------------------------------------------------------------------------------*/

export interface BaseInputProps extends InputContentProps {
  /** input에 대한 label text */
  label?: string
  /** input의 우측 상단에 표시되는 text */
  helperText?: string
  error?: BaseInputBottomSectionProps['error']
  errorRender?: BaseInputBottomSectionProps['errorRender']
  /** Input.Content와 상단 사이의 간격 */
  topOffset?: AtomicProps['marginBottom']
  /** Input.Content와 하단 사이의 간격 */
  bottomOffset?: AtomicProps['marginTop']
}

export const BaseInput = forwardRef((props: BaseInputProps, ref: PolymorphicRef<'input'>) => {
  const { wrapperProps, baseInputTopSectionProps, contentProps, baseInputBottomSectionProps } =
    populateBaseInputProps(props)

  return (
    <Input.Wrapper {...wrapperProps}>
      <BaseInputTopSection {...baseInputTopSectionProps} />
      <Input.Content ref={ref} className={styles.inputContent} {...contentProps} />
      <BaseInputBottomSection {...baseInputBottomSectionProps} />
    </Input.Wrapper>
  )
})

export interface BaseInputTopSectionProps {
  isLabelEnabled: boolean
  isHelperTextEnabled: boolean
  helperText?: BaseInputProps['helperText']
  label?: BaseInputProps['label']
  htmlFor?: BaseInputProps['id']
}

/* -------------------------------------------------------------------------------------------------
 * BaseInputTopSection
 * -----------------------------------------------------------------------------------------------*/
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

  const ErrorComponent =
    error && errorRender ? (
      errorRender(error)
    ) : (
      <Text variant="caption1" color="red">
        {error}
      </Text>
    )

  return isBottomSectionEnabled ? ErrorComponent : null
}
