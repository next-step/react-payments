import type { Meta, StoryObj } from "@storybook/react";

import PasswordInput from "../PasswordInput";

const meta = {
  title: "Input/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  args: {
    type: "password",
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
