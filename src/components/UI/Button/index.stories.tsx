import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '추가하기',
};

export const RemoveButton = Template.bind({});
RemoveButton.args = {
  variant: 'removeBtn',
};
