import { Meta, StoryObj } from '@storybook/react';
import CardExpirationDate from './CardExpirationDate';
import { Container, InputBox } from '@/components/common';
import CardInfoProvider from '@/provider/card-info-provider/CardInfoProvider';
import '../../../../../../styles/input.css';
const meta = {
  title: 'CardExpirationDate',
  component: CardExpirationDate,
  decorators: [
    (Story) => (
      <div className="app" style={{ width: '700px' }}>
        <CardInfoProvider>
          <Container title="만료일">
            <InputBox className="w-50">
              <Story />
            </InputBox>
          </Container>
        </CardInfoProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof CardExpirationDate>;

export default meta;

type Story = StoryObj<typeof CardExpirationDate>;

export const DefaultCardExpirationDate: Story = {
  args: {},
};
