import type { Meta, StoryObj } from "@storybook/react";

import Title from "../Title";

const meta = {
  title: "Common/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Title",
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
