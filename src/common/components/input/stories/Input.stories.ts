import type { Meta, StoryObj } from "@storybook/react";

import BasicInput from "common/components/input/BasicInput";

const meta = {
  title: "Input/BasicInput",
  component: BasicInput,
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "placeholder",
    maxLength: 10,
    type: "text",
  },
  argTypes: {
    type: {
      options: ["text", "password"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof BasicInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
