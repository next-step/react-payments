import { PropsWithChildren } from 'react'

const DarkOverlay = ({ children }: PropsWithChildren) => {
  return <div className="dark-overlay">{children}</div>
}

export default DarkOverlay
