import { InputProps } from '../../../types/element.d'

const Input = ({ type = 'text', className = 'input-basic', onChange, value, id }: InputProps) => {
  return <input id={id} value={value} className={className} onChange={onChange} type={type} />
}

export default Input
