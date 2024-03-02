import { BaseInput } from '@/components/organism/base-input/base-input'
import { Meta, StoryObj } from '@storybook/react'
import { layoutArgTypes } from '@/stories/arg-types.ts'
import { Flex } from '@/components/atom/flex'
import { IconAlertCircle } from '@tabler/icons-react'

const meta: Meta<typeof BaseInput> = {
  title: 'organism/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
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

export const ErrorCustomExample: Story = {
  render: args => <BaseInput {...args} />,
  args: {
    id: 'base-input',
    label: '좋아하는 숫자 세자리',
    defaultValue: 12345,
    placeholder: '숫자를 입력하세요.',
    error: '숫자는 3자리 까지만 입력해주세요.',
    errorRender: (error: string) => (
      <Flex gap="4px" color="red" alignItems="center">
        <IconAlertCircle />
        {error}
      </Flex>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
<BaseInput
  defaultValue={12345}
  error="숫자는 3자리 까지만 입력해주세요."
  errorRender={(error: string) => (
      <Flex gap="4px" color="red" alignItems="center">
        <IconAlertCircle />
        {error}
      </Flex>
  )}
  id="base-input"
  label="좋아하는 숫자 세자리"
  placeholder="숫자를 입력하세요."
/>
        `,
      },
    },
  },
}
