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
Template.args = { count: 4, width: 4, height: 4, gap: 2, color: '#000' };
Template.storyName = 'Playground';
