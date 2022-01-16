import { ComponentMeta, ComponentStory } from '@storybook/react'
import Card from './index'

export default {
  title: '카드',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const FormAreaStory = Template.bind({})

FormAreaStory.args = {
  name: '김철수',
}
