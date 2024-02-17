import { Meta, Story } from '@storybook/react'
import { useState } from 'react'

import { CardDecorator } from '@/decorator'

import Toast, { ToastProps } from './Toast'

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
  decorators: [CardDecorator],
} as Meta

const Template: Story<ToastProps> = (args) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <button className="toast-button" onClick={handleClick}>
        Toast 열기
      </button>
      <Toast {...args} open={open} onOpenChange={setOpen} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: '입력정보가 올바른지 확인해주세요❗️',
  description: '',
}
