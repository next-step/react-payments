import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './index';

export default {
  title: 'Payments/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  }
} as ComponentMeta<typeof Modal>;
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: false,
};
