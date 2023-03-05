import { PropsWithChildren } from 'react'

const CardBox = ({ children }: PropsWithChildren) => {
  return <div className="card-box">{children}</div>
}

export default CardBox
