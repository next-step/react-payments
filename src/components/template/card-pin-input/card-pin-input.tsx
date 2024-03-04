import { BaseInput, BaseInputContent, BaseInputProps, Flex, Text } from '@/components'
import { useUncontrolledInputState } from '@/hooks/use-uncontrolled-input-state.ts'
import { ChangeEvent, useRef } from 'react'

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

export const CardPinInput = ({
  id,
  value,
  defaultValue,
  onChange,
  inputDigit = 2,
  totalDigit = 4,
  ...props
}: CardPinInputProps) => {
  const inputsRef = useRef<HTMLInputElement[]>(Array.from({ length: inputDigit }))

  const [pinValue, onChangePinValue] = useUncontrolledInputState({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  })

  const handleChangePinInputValue = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const isInvalidValue = isNaN(Number(inputValue))
    const isDeleteInput = inputValue.length === 0
    if (isInvalidValue) return
    if (isDeleteInput) {
      // move focus previously
      onChangePinValue(pinValue.slice(0, -1))
      inputsRef.current?.[index - 1]?.focus()
    } else {
      // move focus next
      onChangePinValue(pinValue + inputValue)
      inputsRef.current?.[index + 1]?.focus()
    }
  }

  return (
    <>
      <BaseInput {...props}>
        <Flex alignItems="center" gap="6px" marginTop="4px">
          {Array.from({ length: inputDigit }).map((_, index) => (
            <BaseInputContent
              id={`${id}-${index}`}
              key={index}
              type="password"
              maxLength={1}
              value={pinValue[index] ?? ''}
              width="48px"
              height="48px"
              textAlign="center"
              onChange={handleChangePinInputValue(index)}
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
}

const FixedPin = () => {
  return (
    <Flex width="48px" height="48px" justifyContent="center" alignItems="center">
      <Text variant="body1" color="aqua">
        •
      </Text>
    </Flex>
  )
}
