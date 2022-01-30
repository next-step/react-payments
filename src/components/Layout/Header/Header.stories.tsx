import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from './index'

export default {
  title: '헤더',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const TitleOnly = Template.bind({})

TitleOnly.args = {
  title: '카드 리스트',
}

export const IncludeLink = Template.bind({})

IncludeLink.args = {
  title: '카드 추가',
  linkTo: '/',
}
