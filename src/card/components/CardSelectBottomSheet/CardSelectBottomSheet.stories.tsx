import { Meta, StoryObj } from '@storybook/react';
import { CardBrand, CardSelectBottomSheet } from '@/card';
import { AppDisplay } from '@/shared';

const meta: Meta<typeof CardSelectBottomSheet> = {
  title: 'Components/CardSelectBottomSheet',
  component: CardSelectBottomSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    opened: true,
    onCardBrandClick: (cardBrand: CardBrand) => {
      alert(`선택한 카드: ${cardBrand.label}`);
    },
  },
  decorators: [
    (Story) => (
      <AppDisplay>
        <Story />
      </AppDisplay>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardSelectBottomSheet>;

export const Primary: Story = {
  render: (args) => <CardSelectBottomSheet {...args} />,
};
