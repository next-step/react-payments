import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from './Card'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})

Default.args = {
  children: <span></span>,
}
