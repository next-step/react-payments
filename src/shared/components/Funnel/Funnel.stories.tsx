import { CardProvider } from 'src/card/providers';
import { Meta, StoryObj } from '@storybook/react';
import { Funnel } from './Funnel';
import { CardCompleteForm, CardAddForm, CardListForm, CardPageIndex } from '@/card';
import { AppDisplay, OverlayProvider } from '@/shared';

const meta: Meta<typeof Funnel> = {
  title: 'Components/Funnel',
  component: Funnel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Funnel>;

export const Primary: Story = {
  render: () => (
    <AppDisplay.Root>
      <OverlayProvider>
        <CardProvider cardStorageKey="story">
          <Funnel.Root>
            <Funnel.Step index={CardPageIndex.CardPayment}>
              <CardListForm />
            </Funnel.Step>
            <Funnel.Step index={CardPageIndex.CardList}>
              <CardListForm />
            </Funnel.Step>
            <Funnel.Step index={CardPageIndex.CardAdd}>
              <CardAddForm />
            </Funnel.Step>
            <Funnel.Step index={CardPageIndex.CardComplete}>
              <CardCompleteForm />
            </Funnel.Step>
          </Funnel.Root>
        </CardProvider>
      </OverlayProvider>
    </AppDisplay.Root>
  ),
};
