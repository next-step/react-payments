import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import '../../../../styles/button.css';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  // decorators: [
  //   (Story) => (
  //     <ButtonBox>
  //       <Story />
  //     </ButtonBox>
  //   ),
  // ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    className: 'button-text button-border-none',
    children: '다음',
  },
};
