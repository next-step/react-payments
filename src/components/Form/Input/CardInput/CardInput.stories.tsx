import { ComponentStory, ComponentMeta } from '@storybook/react'
import CardInput from './CardInput'

export default {
  title: 'Components/Form/Input/CardInput',
  component: CardInput,
} as ComponentMeta<typeof CardInput>

const Template: ComponentStory<typeof CardInput> = (args) => <CardInput {...args} />

export const Base = Template.bind({})
export const Options = Template.bind({})

Base.args = {
  labelName: '입력 제목',
  labelRight: <span>입력 오른쪽 공간</span>,
  errMessages: '에러메시지',
}
