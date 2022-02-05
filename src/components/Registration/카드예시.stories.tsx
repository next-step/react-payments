import { ComponentMeta, ComponentStory } from '@storybook/react';
import { 카드예시 } from './카드예시';

export default {
  title: 'components/카드예시',
  component: 카드예시,
} as ComponentMeta<typeof 카드예시>;

const Template: ComponentStory<typeof 카드예시> = (args) => <카드예시 {...args} />;

export const Default = Template.bind({});

Default.args = {
  cardForm: {
    cardNumber: ['1234', '1234', '1234', '1234'],
    CVC: '123',
    expireDate: ['12', '21'],
    password: ['1', '2'],
  },
};
