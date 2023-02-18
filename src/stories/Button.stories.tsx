import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../components/ui/Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  type: 'primary',
  variant: 'filled',
  children: 'Button',
  size: 'small',
  isDisabled: false,
}
