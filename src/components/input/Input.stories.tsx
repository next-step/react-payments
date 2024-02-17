import { Meta, ComponentStory } from '@storybook/react'
import { useRef } from 'react'

import { CardDecorator } from '@/decorator'

import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [CardDecorator],
} as Meta

const Template: ComponentStory<typeof Input> = (props) => {
  const ref = useRef<HTMLInputElement>(null)
  return <Input {...props} ref={ref} />
}

export const Default = Template.bind({})
Default.args = {
  placeholder: '카드 이름을 입력해주세요.',
  type: 'text',
  maxLength: 30,
  addtionalClassName: '',
}
