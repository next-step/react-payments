import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CardModal from './CardModal'

// config.js
const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modal')
document.body.append(modalRoot)

export default {
  title: 'Components/Modal/CardModal',
  component: CardModal,
} as ComponentMeta<typeof CardModal>

export function Default() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsModalOpen(!isModalOpen)}>Open Modal</button>
      <CardModal isOpen={isModalOpen} openModal={setIsModalOpen} />
    </>
  )
}
