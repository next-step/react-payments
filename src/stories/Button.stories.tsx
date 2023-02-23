import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '../components/atoms/Button'
import { UI_SIZE, UI_VARIANT } from 'constants/ui.constant'

export default {
  title: 'components/Button',
  component: Button,
  parameters: {
    componentSubtitle: '버튼 컴포넌트',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Fill = Template.bind({})
Fill.args = {
  variant: UI_VARIANT.FILL,
  children: 'Button',
  size: UI_SIZE.SMALL,
  color: '#94dacd',
  isDisabled: false,
  onClick: action('onClick'),
}

export const Outline = Template.bind({})
Outline.args = {
  variant: UI_VARIANT.OUTLINE,
  children: 'Button',
  size: UI_SIZE.SMALL,
  color: '#94dacd',
  isDisabled: false,
  onClick: action('onClick'),
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: UI_VARIANT.GHOST,
  children: 'Button',
  size: UI_SIZE.SMALL,
  color: '#94dacd',
  isDisabled: false,
  onClick: action('onClick'),
}
