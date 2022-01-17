import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardItem from './Card';

export default {
  title: 'components/cardItem',
  component: CardItem,
} as ComponentMeta<typeof CardItem>;

const Template: ComponentStory<typeof CardItem> = (args) => <CardItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  card: {
    cardNumber: ['1234', '1234', '1234', '1234'],
    CVC: '123',
    expireDate: ['12', '21'],
    password: ['1', '2'],
  },
};
