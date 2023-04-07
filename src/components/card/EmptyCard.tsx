import { PropsWithChildren } from 'react'

import { CardBox } from '@/components/card'

function EmptyCard({ children }: PropsWithChildren) {
  return (
    <CardBox>
      <div className="empty-card">{children}</div>
    </CardBox>
  )
}

export default EmptyCard
