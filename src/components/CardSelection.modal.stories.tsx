import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardSelection, Modal } from './index';

export default {
  title: 'Payments/CardSelection-Modal',
  component: CardSelection,
  parameters: {
    layout: 'centered',
  }
} as ComponentMeta<typeof CardSelection>;
const Template: ComponentStory<typeof CardSelection> = (args) => (
  <Modal open={true}>
    <CardSelection {...args} />
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  onChange: (data: object) => console.log(data),
};
