import type { Meta, StoryObj } from "@storybook/react";

import TextInput from "../TextInput";

const meta = {
  title: "Input/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "placeholder",
    maxLength: 10,
    type: "text",
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
