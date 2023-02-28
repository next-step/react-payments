import type { ComponentStory, Meta } from '@storybook/react'

import Input from '../../components/Element/Input'

export default {
  title: 'Input',
  component: Input,
  argTypes: { onChange: { action: 'changed' } },
} as Meta

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  className: 'input-basic',
}
