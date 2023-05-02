import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Title',
  bgColor: 'skyblue',
  customerName: 'NAME',
  expirationDate: '02/23',
  creditNumber: '1234-5678-1234-5678',
  alias: 'Alias',
  onClick: () => {},
};
