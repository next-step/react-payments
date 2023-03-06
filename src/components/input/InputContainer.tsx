import { PropsWithChildren } from 'react'

interface InputContainerProps {
  addtionalClassName?: string
}

const InputContainer = ({ children, addtionalClassName }: PropsWithChildren<InputContainerProps>) => {
  return <div className={`input-container ${addtionalClassName}`}>{children}</div>
}

export default InputContainer
