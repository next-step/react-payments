import './input.css'

interface InputProps {
  type: string
  value?: string
  primary?: boolean
  backgroundColor?: string
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  maxLength?: number
  disabled?: boolean
}

export const Input = ({ type, primary, size = 'large', backgroundColor, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className={['input-basic', `input-${size}`].join(' ')}
      style={{ backgroundColor }}
      // value={state} //
      // onChange={(e) => handleChange(e.target.value)}

      {...props}
    />
  )
}
