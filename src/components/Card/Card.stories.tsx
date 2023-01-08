import Card from './Card';
//
import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultTemplate = Template.bind({});
