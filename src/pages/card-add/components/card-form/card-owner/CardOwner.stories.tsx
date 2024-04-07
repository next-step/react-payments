import { Meta, StoryObj } from '@storybook/react';

import { Container } from '@/components/common/index';
import CardOwner from './CardOwner';
import CardInfoProvider from '@/provider/card-info-provider/CardInfoProvider';

import '../../../../../../styles/input.css';

const meta = {
  title: 'CardOnwer',
  component: CardOwner,
  decorators: [
    (Story) => (
      <div className="app">
        <CardInfoProvider>
          <Container>
            <Story />
          </Container>
        </CardInfoProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof CardOwner>;

export default meta;

type Story = StoryObj<typeof CardOwner>;

export const DefaultCardOnwer: Story = {};
