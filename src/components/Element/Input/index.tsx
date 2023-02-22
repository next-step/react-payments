import { InputProps } from '../../../types/element.d'

const Input = ({
  type = 'text',
  className = 'input-basic',
  onChange,
  value,
  id,
  placeholder,
  inputRef,
  onBlur,
}: InputProps) => {
  return (
    <input
      id={id}
      ref={inputRef}
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={onChange}
      type={type}
      onBlur={onBlur}
    />
  )
}

export default Input
