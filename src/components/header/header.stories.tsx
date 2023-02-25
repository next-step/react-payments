import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from './header'

export default {
  title: 'components/Header',
  component: Header,
  parameters: {
    componentSubtitle: '헤더 컴포넌트',
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  title: '헤더',
}