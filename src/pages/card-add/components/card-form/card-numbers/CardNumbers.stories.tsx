import { Meta, StoryObj } from '@storybook/react';
import CardNumbers from './CardNumbers';
import { Container, InputBox } from '@/components/common';
import CardInfoProvider from '@/provider/card-info-provider/CardInfoProvider';
import '../../../../../../styles/input.css';
const meta = {
  title: 'CardNumbers',
  component: CardNumbers,
  decorators: [
    (Story) => (
      <div className="app" style={{ width: '700px' }}>
        <CardInfoProvider>
          <Container title="카드 번호">
            <InputBox>
              <Story />
            </InputBox>
          </Container>
        </CardInfoProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof CardNumbers>;

export default meta;

type Story = StoryObj<typeof CardNumbers>;

export const DefaultCardNumbers: Story = {
  args: {},
};
