import type { Meta, StoryObj } from "@storybook/react";
import "../styles/input.css";

import Label from "./Label";

const meta = {
  title: "Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputLabel: Story = {
  args: {
    className: "input-title",
    label: "카드번호",
  },
};
