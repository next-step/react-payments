import { ComponentMeta, ComponentStory } from '@storybook/react';
import '../../styles.css';
import Card from '.';

export default {
  title: 'Card',
  component: Card,
  argTypes: { onCardClick: { action: 'clicked' } },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Default = Template.bind({});

export const EmptyCard = Template.bind({});

Default.args = {
  empty: false,
  cardInfo: {
    title: 'Title',
    bgColor: 'skyblue',
    customerName: 'NAME',
    expirationDate: '02/23',
    creditNumber: '1234-5678-1234-5678',
  },
  alias: 'Alias',
};

EmptyCard.args = {
  empty: true,
};
