import { ChangeEvent } from 'react'

type InputPropsType = {
  // type: 'text' | 'password'
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

function Input(props: InputPropsType) {
  const { value, onChange, placeholder } = props
  return (
    <>
      <input
        className="input-basic input-color-highlight input-box"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
