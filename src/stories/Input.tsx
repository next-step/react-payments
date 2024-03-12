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
  label?: string
  className?: string
}

export const Input = ({ type, primary, size = 'large', backgroundColor, ...props }: InputProps) => {
  return (
    <div className={'input-container'}>
      <span className={'input-title'}>{props.label}</span>
      <input type={type} className={[`${props.className ?? 'input-basic'}`, `input-${size}`].join(' ')} style={{ backgroundColor }} {...props} />
    </div>
  )
}
