import type { ComponentStory, Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultTemplate = Template.bind({});
DefaultTemplate.args = {
  children: '다음',
  onClick: () => alert('다음 페이지로 이동합니다.'),
};
