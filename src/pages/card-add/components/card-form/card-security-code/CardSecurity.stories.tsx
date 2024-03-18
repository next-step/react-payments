import { Meta, StoryObj } from '@storybook/react';

import { Container } from '@/components/common';
import CardInfoProvider from '@/provider/card-info-provider/CardInfoProvider';
import '../../../../../../styles/input.css';
import '../../../../../../styles/utils.css';
import '../../../../../../styles/tooltip.css';
import CardSecurityCode from './CardSecurityCode';
const meta = {
  title: 'CardSecurityCode',
  component: CardSecurityCode,
  decorators: [
    (Story) => (
      <div className="app" style={{ width: '700px' }}>
        <CardInfoProvider>
          <Container title="보안코드(CVC)">
            <Story />
          </Container>
        </CardInfoProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof CardSecurityCode>;

export default meta;

type Story = StoryObj<typeof CardSecurityCode>;

export const DefaultCardSecurityCode: Story = {
  args: {},
};
