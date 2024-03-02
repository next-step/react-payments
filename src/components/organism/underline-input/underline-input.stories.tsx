import { Meta, StoryObj } from '@storybook/react'
import { layoutArgTypes } from '@/stories/arg-types'
import { UnderlineInput } from './underline-input'

const meta: Meta<typeof UnderlineInput> = {
  title: 'organism/UnderlineInput',
  component: UnderlineInput,
  tags: ['autodocs'],
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story = StoryObj<typeof UnderlineInput>

export const Default: Story = {
  render: args => <UnderlineInput {...args} />,
  args: {
    placeholder: '아무거나 입력하세요',
    contentAlign: 'center',
  },
}
