import { ComponentStory, Meta } from '@storybook/react';

import Input from '@/components/Forms/Input';

export default {
  title: 'components/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  placeholder: '입력해 주세요.',
};

export const Underline = Template.bind({});
Underline.args = {
  variant: 'underline',
  placeholder: '입력해 주세요.',
};
