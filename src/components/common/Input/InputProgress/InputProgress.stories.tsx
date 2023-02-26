import { Story } from '@storybook/react';

import { InputProgress } from 'components/common';
import type { InputProgressProps } from 'components/common/Input/InputProgress';

export default {
  title: 'InputProgress',
  component: InputProgress,
};

export const Template: Story<InputProgressProps> = (args) => <InputProgress {...args} />;
Template.args = { current: 0, max: 30 };
Template.storyName = 'Playground';
