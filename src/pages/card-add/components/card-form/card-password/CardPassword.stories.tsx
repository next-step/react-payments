import { Meta, StoryObj } from '@storybook/react';
import CardPassword from './CardPassword';
import CardInfoProvider from '@/provider/card-info-provider/CardInfoProvider';
import { Container } from '@/components/common';
import '../../../../../../styles/input.css';
const meta = {
  title: 'CardPassword',
  component: CardPassword,
  decorators: [
    (Story) => (
      <div className="app">
        <CardInfoProvider>
          <Container title="카드 비밀번호">
            <div style={{ display: 'flex', gap: '5px' }}>
              <Story />
            </div>
          </Container>
        </CardInfoProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof CardPassword>;

export default meta;
type Story = StoryObj<typeof CardPassword>;

export const DefaultCardPassword: Story = {};
