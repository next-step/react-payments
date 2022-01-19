import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
};
