import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ErrorIcon } from 'components/atoms/ErrorIcon'

export default {
  title: 'components/ErrorIcon',
  component: ErrorIcon,
  parameters: {
    componentSubtitle: '에러 아이콘 컴포넌트',
  },
} as ComponentMeta<typeof ErrorIcon>

const Template: ComponentStory<typeof ErrorIcon> = (args) => (
  <ErrorIcon {...args} />
)

export const Default = Template.bind({})
Default.args = {
  message: '데이터를 불러올 수 없습니다',
}
