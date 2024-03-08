import { Meta, StoryObj } from '@storybook/react';
import { CardSelectBottomSheet } from './CardSelectBottomSheet';
import { AppLayout } from '@/components';
import { CardBrand } from '@/type';

const meta: Meta<typeof CardSelectBottomSheet> = {
  title: 'Components/CardSelectBottomSheet',
  component: CardSelectBottomSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onSubmit: (cardBrand: CardBrand) => {
      alert(`선택한 카드: ${cardBrand.label}`);
    },
  },
  decorators: [
    (Story) => (
      <AppLayout>
        <Story />
      </AppLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardSelectBottomSheet>;

export const Primary: Story = {
  render: (args) => <CardSelectBottomSheet {...args} />,
};
