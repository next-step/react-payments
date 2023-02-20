import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AiOutlineLeft } from 'react-icons/ai'

import { Header } from '../components/molecules/Header'

export default {
  title: 'Header',
  component: Header,

  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: '카드 추가',
  icon: <AiOutlineLeft />,
  onClickIcon: () => {
    console.log('뒤로 가기')
  },
}
