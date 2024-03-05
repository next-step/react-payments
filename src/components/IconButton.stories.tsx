import type { Meta, StoryObj } from '@storybook/react'
import IconButtonComponent from './IconButton.tsx'

const meta: Meta<typeof IconButtonComponent> = {
  component: IconButtonComponent,
}

export default meta

type Story = StoryObj<typeof IconButtonComponent>

export const IconButton: Story = {
  args: {
    file: '/icons/back.svg',
  },
}
