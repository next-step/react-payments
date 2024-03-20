import { type Meta, type StoryObj } from '@storybook/react';
import Button from './Button';
import '../../../../styles/button.css';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  // Decorators: [
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
