import { ComponentType } from 'react'

import { CardProvider } from '@/providers'

export default function CardDecorator(Story: ComponentType) {
  return (
    <div className="root">
      <div className="app">
        <CardProvider>
          <Story />
        </CardProvider>
      </div>
    </div>
  )
}
