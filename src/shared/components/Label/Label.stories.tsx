import { Meta, StoryObj } from '@storybook/react';
import { AppDisplay, TextField, TypographyVariants, VStack, Label, storybookControls } from '@/shared';

const meta: Meta<typeof Label> = {
  title: 'Primitive/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...storybookControls.argTypes,
    variant: {
      options: ['caption', 'title', 'body', 'subtitle', 'headline', 'display'],
    },
  },
  args: {
    variant: 'caption',
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

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  render: (args) => (
    <VStack>
      <Label htmlFor="payment-input" {...args}>
        Label
      </Label>
      <TextField id="payment-input" placeholder="Placeholder" variant="filled" />
    </VStack>
  ),
};

export const WithTypographyVariants: Story = {
  render: (args) => (
    <VStack spacing="24px">
      {Object.values(TypographyVariants).map((variant) => (
        <Label key={variant} htmlFor={`input-${variant}`} {...args} variant={variant}>
          {`Label - ${variant}`}
        </Label>
      ))}
    </VStack>
  ),
};
