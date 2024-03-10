import { useState } from 'react'

export interface UseUncontrolledInputStateParams<T> {
  value?: T
  defaultValue?: T
  finalValue: T
  onChange?: (value: T) => void
}

export const useUncontrolledInputState = <T>({
  value,
  defaultValue,
  finalValue,
  onChange = () => {},
}: UseUncontrolledInputStateParams<T>) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<T>(
    defaultValue !== undefined ? defaultValue : (value as T) ?? finalValue,
  )

  const handleUncontrolledChange = (val: T) => {
    setUncontrolledValue(val)
    onChange?.(val)
  }

  if (value !== undefined) {
    return [value, onChange] as const
  }
  return [uncontrolledValue, handleUncontrolledChange] as const
}
