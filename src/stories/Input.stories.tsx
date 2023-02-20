import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from 'components/atoms/Input'

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Basic = Template.bind({})
// Basic.args = {
//   placeholdaer: '텍스트를 입력하세요',
//   size: 'small',
//   variant: 'fill',
//   color: '#e5e5e5',
//   onChange: () => {
//     return
//   },
// }
