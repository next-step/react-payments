type InputPropsType = {
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

function Input(props: InputPropsType) {
  const { className = '', ...params } = props

  return <input className={`input-basic ${className}`} {...params} />
}

export default Input
