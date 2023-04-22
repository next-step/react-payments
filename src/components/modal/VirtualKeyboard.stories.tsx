import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardDecorator } from '@/decorator'
import { useModal } from '@/hooks'

import VirtualKeyboard from './VirtualKeyboard'

export default {
  title: 'Components/Modal/VirtualKeyboard',
  component: VirtualKeyboard,
  decorators: [CardDecorator],
} as ComponentMeta<typeof VirtualKeyboard>

const Template: ComponentStory<typeof VirtualKeyboard> = () => {
  const { openModal } = useModal()

  return (
    <div className="flex items-center gap-2">
      <button
        className="digit-button px-5"
        onClick={() => openModal({ element: <VirtualKeyboard onKeyPress={(value) => console.log(value)} /> })}
      >
        Click Here
      </button>
    </div>
  )
}

export const Default = Template.bind({})
