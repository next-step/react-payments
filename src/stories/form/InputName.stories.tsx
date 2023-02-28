import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputName from '../../components/form/InputName';

export default {
  title: 'Common/Form',
  component: InputName,
} as ComponentMeta<typeof InputName>;

const Template: ComponentStory<typeof InputName> = (args) => (
  <InputName {...args} />
);

export const Name = Template.bind({});
