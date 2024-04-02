import { BaseInput, BaseInputProps } from '@/components/organism/base-input'
import { useUncontrolledInputState } from '@/hooks/use-uncontrolled-input-state'
import { PolymorphicRef } from '@/types'
import { forwardRef } from 'react'

export interface CardNameInputProps
  extends Omit<BaseInputProps, 'value' | 'defaultValue' | 'onChange'> {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export const CardNameInput = forwardRef(
  (props: CardNameInputProps, ref: PolymorphicRef<'input'>) => {
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
        ref={ref}
        maxLength={maxLength}
        value={_value}
        onChange={e => handleChangeInput(e.target.value)}
        helperText={inputHelperText}
      />
    )
  },
)
