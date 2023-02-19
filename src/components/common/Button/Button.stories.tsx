import { Story } from '@storybook/react';

import { Button } from 'components/common';
import { ButtonProps } from 'components/common/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export const Template: Story<ButtonProps> = (args) => <Button {...args} />;
Template.args = {
  children: 'Sample',
  fontSize: 14,
  weight: 500,
  color: '#383838',
};
Template.storyName = 'Playground';
