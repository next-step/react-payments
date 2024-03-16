import { Meta, StoryObj } from '@storybook/react';
import { AppDisplay, Button, storybookControls } from '@/shared';

const meta: Meta<typeof Button> = {
  title: 'Primitive/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...storybookControls.argTypes,
    type: {
      options: ['button', 'submit', 'reset'],
    },
    variant: {
      options: ['solid', 'outline', 'ghost'],
    },
    colorScheme: {
      options: ['teal', 'gray'],
    },
    textAlign: {
      options: ['left', 'center', 'right'],
    },
  },
  args: {
    type: 'button',
    variant: 'solid',
    colorScheme: 'teal',
    children: 'Button',
  },
  decorators: [
    (Story) => (
      <AppDisplay>
        <Story />
      </AppDisplay>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'solid',
  },
};

export const WithVariantOutline: Story = {
  args: {
    variant: 'outline',
  },
};

export const WithVariantGhost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const WithColorSchemeGray: Story = {
  args: {
    colorScheme: 'gray',
  },
};

export const WithDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithCustomSize: Story = {
  args: {
    width: '200px',
    height: '50px',
  },
};

export const WithCustomTextAlign: Story = {
  args: {
    width: '200px',
    height: '50px',
    textAlign: 'right',
  },
};
