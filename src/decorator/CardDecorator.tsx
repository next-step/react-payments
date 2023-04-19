import { ComponentType } from 'react'

import { Modal } from '@/components/modal'
import { CardProvider, ModalProvider } from '@/providers'

export default function CardDecorator(Story: ComponentType) {
  return (
    <div className="root">
      <div className="app">
        <ModalProvider>
          <CardProvider>
            <Story />
            <Modal />
          </CardProvider>
        </ModalProvider>
      </div>
    </div>
  )
}
