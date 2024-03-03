import { Meta, StoryObj } from '@storybook/react';
import { CardInput } from './CardInput';
import { AppLayout } from '@/components';
import { VStack } from '@/shared/components';

const meta: Meta<typeof CardInput> = {
  title: 'Components/CardInput',
  component: CardInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <AppLayout>
        <Story />
      </AppLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardInput>;

export const Primary: Story = {
  render: () => (
    <VStack gap="24px">
      <CardInput.Number />
      <CardInput.ExpirationDate />
      <CardInput.OwnerName />
      <CardInput.SecurityCode />
      <CardInput.Password />
    </VStack>
  ),
};

export const WithNumber: Story = {
  render: () => <CardInput.Number />,
};

export const WithExpirationDate: Story = {
  render: () => <CardInput.ExpirationDate />,
};

export const WithOwnerName: Story = {
  render: () => <CardInput.OwnerName />,
};

export const WithSecurityCode: Story = {
  render: () => <CardInput.SecurityCode />,
};

export const WithPassword: Story = {
  render: () => <CardInput.Password />,
};
