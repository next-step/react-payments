import { type Meta, type StoryObj } from '@storybook/react';
import Card from './Card';
import '../../../styles/card.css';
const meta = {
  title: 'Card',
  component: Card,
  argTypes: {
    status: {
      options: ['big', 'small', 'empty'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  args: {
    status: 'big' || 'small' || 'empty',
    ownerName: 'NAME',
    month: '',
    year: '',
    cardNumbers: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
  },
};

export default meta;
