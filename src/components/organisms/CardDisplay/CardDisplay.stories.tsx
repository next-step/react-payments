import type { Meta, StoryObj } from '@storybook/react';
import CardDisplay from './CardDisplay';

const meta = {
  title: 'organisms/CardDisplay',
  component: CardDisplay,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'small',
    cardInfo: {
      cardCompany: {
        name: 'VISA',
        color: 'teal',
      },
      cardNumber1: '1235',
      cardNumber2: '2345',
      cardNumber3: '3456',
      cardNumber4: '4567',
      cardHolderName: '',
      expirationMonth: '',
      expirationYear: '',
    },
    onOpen: () => console.log('Card clicked'),
  },
};

export const BigSizeCardDisplay: Story = {
  args: {
    size: 'big',
    cardInfo: {
      cardCompany: {
        name: '비씨',
        color: 'orange',
      },
      cardNumber1: '1234',
      cardNumber2: '2345',
      cardNumber3: '3456',
      cardNumber4: '4567',
      cardHolderName: '',
      expirationMonth: '',
      expirationYear: '',
    },
    onOpen: () => console.log('Card clicked'),
  },
};

export const NoCardCompany: Story = {
  args: {
    size: 'small',
    cardInfo: {
      cardCompany: {
        name: '',
        color: '',
      },
      cardNumber1: '1234',
      cardNumber2: '2345',
      cardNumber3: '3456',
      cardNumber4: '4567',
      cardHolderName: '',
      expirationMonth: '',
      expirationYear: '',
    },
    onOpen: () => console.log('Card clicked'),
  },
};

export const CardHolderNameEllipsis: Story = {
  args: {
    size: 'small',
    cardInfo: {
      cardCompany: {
        name: 'HANA',
        color: 'yellow',
      },
      cardNumber1: '1234',
      cardNumber2: '2345',
      cardNumber3: '3456',
      cardNumber4: '4567',
      cardHolderName: '김수한무거북이와두루미삼천갑자동방삭',
      expirationMonth: '02',
      expirationYear: '26',
    },
    onOpen: () => console.log('Card clicked'),
  },
};
