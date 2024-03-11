import { ReactNode } from 'react'

type ContainerPropsType = {
  title: string
  children: ReactNode
  className?: string
}

function Container({ title, children, className = '' }: ContainerPropsType) {
  return (
    <div className={`input-container ${className}`}>
      <span className="input-title">{title}</span>
      <div>{children}</div>
    </div>
  )
}

export default Container
