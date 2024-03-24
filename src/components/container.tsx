import { ReactNode } from 'react'

type ContainerPropsType = {
  title: string
  children: ReactNode
  titleRight?: ReactNode
  className?: string
}

function Container({
  title,
  titleRight,
  children,
  className = '',
}: ContainerPropsType) {
  return (
    <div className={`input-container ${className}`}>
      <span className="input-title">{title}</span>
      {titleRight && <>{titleRight}</>}
      <div>{children}</div>
    </div>
  )
}

export default Container
