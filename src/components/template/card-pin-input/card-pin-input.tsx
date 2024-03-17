import { BaseInput, BaseInputContent, BaseInputProps, Flex, Text } from '@/components'
import { useUncontrolledInputState } from '@/hooks/use-uncontrolled-input-state.ts'
import { forwardRef, useImperativeHandle, useRef } from 'react'

export interface CardPinInputProps
  extends Omit<BaseInputProps, 'value' | 'defaultValue' | 'onChange'> {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  /** 입력이 필요한 자리수 */
  inputDigit?: number
  /** pin 총 자리수 */
  totalDigit?: number
}

export interface CardPinInputHandle {
  focus: () => void
}

export const CardPinInput = forwardRef<CardPinInputHandle, CardPinInputProps>(
  (
    { id, value, defaultValue, onChange, inputDigit = 2, totalDigit = 4, onFocus, ...props },
    ref,
  ) => {
    const inputsRef = useRef<HTMLInputElement[]>(Array.from({ length: inputDigit }))

    const [pinValue] = useUncontrolledInputState({
      value,
      defaultValue,
      finalValue: '',
      onChange,
    })

    useImperativeHandle(ref, () => {
      return {
        focus: () => {
          inputsRef.current?.[pinValue.length]?.focus()
        },
      }
    })

    return (
      <>
        <BaseInput htmlFor={`${id}-${pinValue.length}`} {...props}>
          <Flex alignItems="center" gap="6px" marginTop="4px">
            {Array.from({ length: inputDigit }).map((_, index) => (
              <BaseInputContent
                id={`${id}-${index}`}
                key={index}
                type="password"
                maxLength={1}
                value={pinValue[index] ?? ''}
                readOnly
                width="48px"
                height="48px"
                textAlign="center"
                onKeyDown={e => e.preventDefault()}
                onFocus={onFocus}
                ref={ref => {
                  inputsRef.current[index] = ref!
                }}
              />
            ))}
            {Array.from({ length: totalDigit - inputDigit }).map((_, index) => (
              <FixedPin key={index} />
            ))}
          </Flex>
        </BaseInput>
        <input type="hidden" value={pinValue} onChange={() => {}} />
      </>
    )
  },
)

const FixedPin = () => {
  return (
    <Flex width="48px" height="48px" justifyContent="center" alignItems="center">
      <Text variant="body1" color="aqua">
        •
      </Text>
    </Flex>
  )
}
