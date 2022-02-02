import { ComponentMeta, ComponentStory } from '@storybook/react'
import FormInput from '../FormInput'
import FormArea from './index'

export default {
  title: '폼 입력요소',
  component: FormArea,
} as ComponentMeta<typeof FormArea>

const Template: ComponentStory<typeof FormArea> = (args) => (
  <FormArea {...args}>
    <FormInput />
  </FormArea>
)

export const FormAreaStory = Template.bind({})

FormAreaStory.args = {
  label: '기본형 입력 영역',
}
