import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { withRouter } from 'storybook-addon-react-router-v6';

import CreateCardForm from './index';

const meta = {
  title: 'templates/CreateCardForm',
  component: CreateCardForm,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CreateCardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  play: async ({ canvasElement }) => {
    //TODO: E2E 테스트 코드 작성
    const canvas = within(canvasElement);
    const nextButton = canvas.getByText(/다음/i);
    await expect(nextButton).toBeInTheDocument();
    await userEvent.click(nextButton);
  },
};
