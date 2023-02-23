import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from 'components/atoms/Input'
import { UI_VARIANT } from 'constants/ui.constant'

export default {
  title: 'ui/Input',
  component: Input,
  parameters: {
    componentSubtitle: '인풋 컴포넌트',
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Fill = Template.bind({})
Fill.args = {
  placeholder: '텍스트를 입력하세요',
  variant: UI_VARIANT.FILL,
  type: 'text',
  maxLength: 20,
  width: '300px',
}

export const Outline = Template.bind({})
Outline.args = {
  placeholder: '텍스트를 입력하세요',
  variant: UI_VARIANT.OUTLINE,
  type: 'text',
  maxLength: 20,
  width: '300px',
}

export const Ghost = Template.bind({})
Ghost.args = {
  placeholder: '텍스트를 입력하세요',
  variant: UI_VARIANT.GHOST,
  type: 'text',
  maxLength: 20,
  width: '300px',
}
