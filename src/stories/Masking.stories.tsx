import { Story } from '@storybook/react';

import { Masking } from 'components';
import type { MaskingProps } from 'components/Masking';

export default {
  title: 'Masking',
  component: Masking,
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export const Template: Story<MaskingProps> = (args) => <Masking {...args} />;
Template.args = { count: 4, width: 4, height: 4, color: '#000' };
Template.storyName = 'Playground';
