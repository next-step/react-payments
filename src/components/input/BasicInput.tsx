import { ChangeEvent, RefObject } from 'react'

interface BasicInputProps {
  type?: 'text' | 'password'
  addtionalClassName?: string
  placeHolder?: string
  value?: string
  dataSet?: string
  inputRef?: RefObject<HTMLInputElement>
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  maxLength?: number
  readonly?: boolean
}

const BasicInput = ({
  type = 'text',
  addtionalClassName,
  placeHolder,
  value,
  dataSet,
  inputRef,
  onChange,
  maxLength,
  readonly,
}: BasicInputProps) => {
  return (
    <input
      type={type}
      ref={inputRef}
      data-name={dataSet}
      className={`input-basic ${addtionalClassName}`}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      readOnly={readonly}
    />
  )
}

export default BasicInput
