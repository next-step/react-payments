import { Meta, StoryObj } from '@storybook/react'
import { Input, InputContentProps } from '@/components/molecules/input/input.tsx'
import { layoutArgTypes } from '@/stories/arg-types.ts'

const meta: Meta<typeof Input.Content> = {
  title: 'molecules/Input',
  component: Input.Content,
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story = StoryObj<typeof Input.Content>

const Template = (args: InputContentProps) => {
  return (
    <Input.Wrapper>
      <Input.Label>input label</Input.Label>
      <Input.Content {...args} />
    </Input.Wrapper>
  )
}

export const Default: Story = {
  render: Template,
  args: {
    placeholder: 'headless input',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Input.Wrapper>
   <Input.Label>input label</Input.Label>
   <Input.Content {...args} />
</Input.Wrapper>
        `,
      },
    },
  },
}
