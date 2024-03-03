import { forwardRef } from 'react'
import { BaseInput, BaseInputContent, BaseInputProps } from '@/components/organism/base-input'
import { PolymorphicRef } from '@/types'
import * as styles from './card-exp-date-input.css'
import { Flex, Text } from '@/components'
import {
  useCardExpDateInputState,
  UseCardExpDateInputStateParams,
} from '@/components/template/card-exp-date-input/use-card-exp-date-input-state.ts'
import { getRepeatedPlaceholder } from './utils/get-date-placeholder.ts'

export interface CardExpDateInputProps
  extends UseCardExpDateInputStateParams,
    Omit<BaseInputProps, 'value' | 'onChange' | 'defaultValue'> {
  /** 입력 날짜값 자리수 */
  dateInputDigit?: number
}

export const CardExpDateInput = forwardRef(
  (
    {
      separator = '/',
      dateInputDigit = 2,
      id,
      label,
      value,
      defaultValue,
      onChange,
      ...otherInputProps
    }: CardExpDateInputProps,
    ref: PolymorphicRef<'input'>,
  ) => {
    const { expDate, monthInputValue, handleChangeMonth, yearInputValue, handleChangeYear } =
      useCardExpDateInputState({
        value,
        defaultValue,
        onChange,
      })

    return (
      <BaseInput id={id} label={label} {...otherInputProps} width="180px">
        <div className={styles.wrapper}>
          <BaseInputContent
            id={`${id}-month`}
            placeholder={getRepeatedPlaceholder('M', dateInputDigit)}
            textAlign="right"
            maxLength={dateInputDigit}
            value={monthInputValue}
            onChange={handleChangeMonth}
            borderBottomRightRadius="none"
            borderTopRightRadius="none"
          />
          <Flex backgroundColor="gray100" height="46px" alignItems="center">
            <Text variant="body1" color="gray500">
              {separator}
            </Text>
          </Flex>
          <BaseInputContent
            id={`${id}-year`}
            placeholder={getRepeatedPlaceholder('Y', dateInputDigit)}
            maxLength={dateInputDigit}
            value={yearInputValue}
            onChange={handleChangeYear}
            borderTopLeftRadius="none"
            borderBottomLeftRadius="none"
          />
          <input type="hidden" ref={ref} value={expDate} onChange={() => {}} />
        </div>
      </BaseInput>
    )
  },
)
