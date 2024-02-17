import { Meta, Story } from '@storybook/react'

import { CardDecorator } from '@/decorator'

import ToolTip, { ToolTipProps } from './ToolTip'

export default {
  title: 'Components/ToolTip',
  component: ToolTip,
  argTypes: {
    content: {
      control: 'text',
    },
  },
  decorators: [CardDecorator],
} as Meta

const Template: Story<ToolTipProps> = (arg) => {
  return <ToolTip {...arg} />
}

export const Default = Template.bind({})
Default.args = {
  content: '카드 보안코드(CVV 또는 CVC)는 카드 결제를 보호하기 위한 3자리의 숫자입니다.',
}
