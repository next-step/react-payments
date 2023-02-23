import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AiOutlineLeft } from 'react-icons/ai'

import { Header } from '../components/molecules/Header'
import { MobileTemplate } from 'templates/MobileTemplate'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Header',
  component: Header,

  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
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
