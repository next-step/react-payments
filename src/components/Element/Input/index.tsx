const Input = ({ type = 'text', className = 'input-basic', onChange, value, id, placeholder }: InputProps) => {
  return <input id={id} placeholder={placeholder} value={value} className={className} onChange={onChange} type={type} />
}

export default Input
