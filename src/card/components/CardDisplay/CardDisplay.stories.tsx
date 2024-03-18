import { Meta, StoryObj } from '@storybook/react';
import { CardDisplay } from '@/card';
import { AppDisplay, VStack, styleToken } from '@/shared';

const meta: Meta<typeof CardDisplay> = {
  title: 'CARD/CardDisplay',
  component: CardDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <AppDisplay>
        <VStack justifyContent="center" alignItems="center">
          <Story />
        </VStack>
      </AppDisplay>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardDisplay>;

export const Primary: Story = {
  render: () => (
    <CardDisplay
      size="small"
      label="Near 카드"
      color={styleToken.color.teal200}
      cardNumber="1234 1234 1234 1234"
      expirationDate="12 12"
      ownerName="Near"
    />
  ),
};

export const WithBackgroundColor: Story = {
  render: () => (
    <CardDisplay
      size="small"
      label="Near 카드"
      color={styleToken.color.gray200}
      cardNumber="1234 1234 1234 1234"
      expirationDate="12 12"
      ownerName="Near"
    />
  ),
};

export const WithSizeBig: Story = {
  render: () => (
    <CardDisplay
      size="big"
      label="Near 카드"
      color={styleToken.color.teal200}
      cardNumber="1234 1234 1234 1234"
      expirationDate="12 12"
      ownerName="Near"
    />
  ),
};

export const WithNoLabel: Story = {
  render: () => (
    <CardDisplay
      size="small"
      label=""
      color={styleToken.color.teal200}
      cardNumber="1234 1234 1234 1234"
      expirationDate="12 12"
      ownerName="Near"
    />
  ),
};
