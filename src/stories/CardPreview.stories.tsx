import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardPreview from '../components/CardPreview';

export default {
  title: 'Component/CardPreview',
  component: CardPreview,
} as ComponentMeta<typeof CardPreview>;

const Template: ComponentStory<typeof CardPreview> = (args) => (
  <CardPreview {...args} />
);

export const Default = Template.bind({});

Default.args = {
  data: {
    digit1: '0000',
    digit2: '0000',
    digit3: '0000',
    digit4: '0000',
    name: 'SEYOUNG',
    expire: '11/26',
  },
};
