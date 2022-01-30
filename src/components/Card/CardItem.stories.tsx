import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardItem } from './CardItem';

export default {
  title: 'components/cardItem',
  component: CardItem,
} as ComponentMeta<typeof CardItem>;

const Template: ComponentStory<typeof CardItem> = (args) => <CardItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  card: {
    cardNumber: '1234-1234-1234-1234',
    CVC: '123',
    expireDate: new Date(),
    password: '12',
    nickname: 'hi',
  },
};
