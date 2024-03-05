import type { Meta, StoryObj } from '@storybook/react'
import TitleComponent from './Title.tsx'

const meta: Meta<typeof TitleComponent> = {
  component: TitleComponent,
}

export default meta

type Story = StoryObj<typeof TitleComponent>

export const Title: Story = {
  args: {
    children: '카드 추가',
  },
}
