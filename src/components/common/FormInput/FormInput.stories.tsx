import type { Meta, StoryObj } from '@storybook/react'
import { FormInput } from './FormInput'

const meta: Meta<typeof FormInput> = {
  title: 'common/FormInput',
  component: FormInput,
  args: {
    width: '100%'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['basic', 'underline']
    },
    type: {
      control: 'radio',
      options: ['number', 'password', 'text']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: '카드 소유자 이름(선택)',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.'
  }
}
