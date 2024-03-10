import { Meta, StoryObj } from '@storybook/react'
import { Box } from './box'
import { layoutArgTypes } from '@/stories/arg-types.ts'

const meta: Meta<typeof Box> = {
  title: 'atom/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: { ...layoutArgTypes },
}

export default meta

type Story = StoryObj<typeof Box>

export const Default: Story = {
  args: {
    children: 'Box - Create Whatever you need',
    as: 'button',
    color: 'white',
    backgroundColor: 'aqua',
    paddingTop: '32px',
    paddingBottom: '32px',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '4px',
  },
}
