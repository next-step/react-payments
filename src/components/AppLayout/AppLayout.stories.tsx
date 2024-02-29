import type { Meta, StoryObj } from '@storybook/react';
import { AppLayout } from '@/components/AppLayout/AppLayout.tsx';
import { HStack, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';

const meta = {
  title: 'Components/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <VStack gap="20px" alignItems="center" justifyContent="center">
        <HStack backgroundColor={styleToken.color.gray100} width="100%" justifyContent="space-between" padding="10px">
          <div>Left</div>
          <div>Right</div>
        </HStack>
        <VStack backgroundColor={styleToken.color.gray200} width="100%" padding="10px">
          <div>App Item 1</div>
          <div>App Item 2</div>
          <div>App Item 3</div>
        </VStack>
      </VStack>
    ),
  },
};
