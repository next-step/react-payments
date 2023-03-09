import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Common/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  kind: 'default',
  children: 'DefaultButton',
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  kind: 'primary',
  children: 'PrimaryButton',
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  kind: 'danger',
  children: 'DangerButton',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  children: 'Disabled',
};
