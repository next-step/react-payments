import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AiOutlineLeft } from 'react-icons/ai'

import { Header } from '../components/molecules/Header'
import { MobileTemplate } from 'templates/MobileTemplate'
import { action } from '@storybook/addon-actions'

export default {
  title: 'components/Header',
  component: Header,
  parameters: {
    componentSubtitle: '헤더 컴포넌트',
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <MobileTemplate>
    <Header {...args} />
  </MobileTemplate>
)

export const Default = Template.bind({})
Default.args = {
  title: '카드 추가',
}

export const IconHeader = Template.bind({})
IconHeader.args = {
  title: '카드 추가',
  icon: <AiOutlineLeft />,
  onClickIcon: action('onClickIcon'),
}
