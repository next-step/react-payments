import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Label",
    placeholder: "placeholder",
    maxLength: 10,
  },
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["text"],
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {},
};
