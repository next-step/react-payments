import { ComponentStory, ComponentMeta } from '@storybook/react'
import { expect } from '@storybook/jest'
import { waitFor, userEvent, within } from '@storybook/testing-library'
import CardInput from './CardInput'

export default {
  title: 'Components/Form/Input/CardInput',
  component: CardInput,
} as ComponentMeta<typeof CardInput>

const Template: ComponentStory<typeof CardInput> = (args) => <CardInput {...args} />

export const Base = Template.bind({})
export const Demo = Template.bind({})

Base.args = {
  labelName: '입력 제목',
  labelRight: <span>입력 오른쪽 공간</span>,
  errMessages: '에러메시지',
}

Demo.args = {
  labelName: '입력 제목',
}

Demo.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByRole('textbox'), '안녕하세요')
  expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('안녕하세요')
}
