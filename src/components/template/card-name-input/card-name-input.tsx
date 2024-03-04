import { BaseInput, BaseInputProps } from '@/components/organism/base-input'
import { useUncontrolledInputState } from '@/hooks/use-uncontrolled-input-state'

export interface CardNameInputProps
  extends Omit<BaseInputProps, 'value' | 'defaultValue' | 'onChange'> {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export const CardNameInput = (props: CardNameInputProps) => {
  const { value, defaultValue, onChange, maxLength = 30 } = props
  const [_value, handleChangeInput] = useUncontrolledInputState({
    value,
    finalValue: '',
    defaultValue,
    onChange,
  })

  const inputHelperText = `${_value.length} / ${maxLength}`

  return (
    <BaseInput
      {...props}
      maxLength={maxLength}
      value={_value}
      onChange={e => handleChangeInput(e.target.value)}
      helperText={inputHelperText}
    />
  )
}
