import type { ComponentStory, Meta } from '@storybook/react';
import Input from '.';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultTemplate = Template.bind({});
DefaultTemplate.args = {
  children: '다음',
};
