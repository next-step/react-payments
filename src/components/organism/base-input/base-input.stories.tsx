import { BaseInput } from '@/components/organism/base-input/base-input'
import { Meta, StoryObj } from '@storybook/react'
import { layoutArgTypes } from '@/stories/arg-types.ts'

const meta: Meta<typeof BaseInput> = {
  title: 'organism/BaseInput',
  component: BaseInput,
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story = StoryObj<typeof BaseInput>

export const Default: Story = {
  render: args => <BaseInput {...args} />,
  args: {
    id: 'base-input',
    label: 'input을 입력하세요.',
    placeholder: 'input placeholder',
  },
}
