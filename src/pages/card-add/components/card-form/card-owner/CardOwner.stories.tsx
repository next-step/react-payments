import { Meta, StoryObj } from '@storybook/react';
import CardOwner from './CardOwner';
import '../../../../../../styles/input.css';
import CardInfoProvider from '@/provider/card-info-provider/CardInfoProvider';
import { Container } from '@/components/common/index';

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
