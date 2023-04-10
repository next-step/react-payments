import { PropsWithChildren } from 'react'

import { CardBox } from '@/components/card'

interface EmptyCardProps {
  backgroundColor?: string
  color?: string
}

function EmptyCard({ children, backgroundColor, color }: PropsWithChildren<EmptyCardProps>) {
  return (
    <CardBox>
      <div className="empty-card" style={{ backgroundColor, color }}>
        {children}
      </div>
    </CardBox>
  )
}

export default EmptyCard
