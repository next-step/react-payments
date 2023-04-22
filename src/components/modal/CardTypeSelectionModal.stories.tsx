import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardDecorator } from '@/decorator'
import { useModal } from '@/hooks'

import CardTypeSelectionModal from './CardTypeSelectionModal'

export default {
  title: 'Components/Modal/CardTypeSelectionModal',
  component: CardTypeSelectionModal,
  decorators: [CardDecorator],
} as ComponentMeta<typeof CardTypeSelectionModal>

const Template: ComponentStory<typeof CardTypeSelectionModal> = () => {
  const { openModal } = useModal()
  return (
    <button className="digit-button px-5" onClick={() => openModal({ element: <CardTypeSelectionModal /> })}>
      Click Here
    </button>
  )
}

export const Default = Template.bind({})
