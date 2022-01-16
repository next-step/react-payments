import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import FormInput from './index'

export default {
  title: '폼 입력요소',
  component: FormInput,
} as ComponentMeta<typeof FormInput>

const Template: ComponentStory<typeof FormInput> = (args) => (
  <FormInput onChange={action('action')} {...args} />
)

export const FormInputStory = Template.bind({})

FormInputStory.args = {
  maxLength: 4,
  type: 'number',
}
