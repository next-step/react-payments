import type { Meta, StoryObj } from "@storybook/react";

import InputLabel from "../InputLabel";

const meta = {
  title: "Input/InputLabel",
  component: InputLabel,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Label",
  },
} satisfies Meta<typeof InputLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
