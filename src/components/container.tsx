import { ReactNode } from 'react'

type ContainerPropsType = {
  title: string
  children: ReactNode
}

function Container({ title, children }: ContainerPropsType) {
  return (
    <div className="input-container">
      <span className="input-title">{title}</span>
      <div className="input-box">{children}</div>
    </div>
  )
}

export default Container
