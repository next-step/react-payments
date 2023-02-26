import { Story } from '@storybook/react';

import { Dash } from 'components/common';
import { DashProps } from 'components/common/Dash';

export default {
  title: 'Dash',
  component: Dash,
};

export const Template: Story<DashProps> = (args) => <Dash {...args} />;
Template.args = { width: 6, height: 3 };
Template.storyName = 'Playground';
