import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardPreview from '../components/CardPreview';

export default {
  title: 'Component/CardPreview',
  component: CardPreview,
} as ComponentMeta<typeof CardPreview>;

const Template: ComponentStory<typeof CardPreview> = () => <CardPreview />;

export const Default = Template.bind({});
