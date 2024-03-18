import { CardProvider } from 'src/card/providers';
import { Meta, StoryObj } from '@storybook/react';
import { Funnel } from './Funnel';
import { CardCompletePage, CardAddPage, CardListPage } from '@/card';

const meta: Meta<typeof Funnel> = {
  title: 'Components/Funnel',
  component: Funnel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <CardProvider>
        <Story />
      </CardProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Funnel>;

export const Primary: Story = {
  render: () => (
    <Funnel.Root startIndex={1}>
      <Funnel.Step index={0}>
        <CardListPage />
      </Funnel.Step>
      <Funnel.Step index={1}>
        <CardAddPage />
      </Funnel.Step>
      <Funnel.Step index={2}>
        <CardCompletePage />
      </Funnel.Step>
    </Funnel.Root>
  ),
};

export const WithStartIndex: Story = {
  render: () => (
    <Funnel.Root startIndex={0}>
      <Funnel.Step index={0}>
        <CardListPage />
      </Funnel.Step>
      <Funnel.Step index={1}>
        <CardAddPage />
      </Funnel.Step>
      <Funnel.Step index={2}>
        <CardCompletePage />
      </Funnel.Step>
    </Funnel.Root>
  ),
};
