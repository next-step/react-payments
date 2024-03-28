import { Meta, StoryObj } from '@storybook/react'
import { SecurityNumberPad } from './security-number-pad'
import { layoutArgTypes } from '@/stories/arg-types'

const meta = {
  title: 'template/SecurityNumberPad',
  component: SecurityNumberPad,
  argTypes: {
    ...layoutArgTypes,
  },
} satisfies Meta<typeof SecurityNumberPad>

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    title: '비밀번호를 입력하세요',
    defaultValue: '',
    onInputComplete: () => void 0,
  },
}
