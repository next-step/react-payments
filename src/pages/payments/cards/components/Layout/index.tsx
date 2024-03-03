import { ReactNode } from 'react'

interface PaymentsLayoutProps {
  children: ReactNode
  title: string
}

export const PaymentsLayout = (props: PaymentsLayoutProps) => {
  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">{props.title}</h2>

        {props.children}
      </div>
    </div>
  )
}
