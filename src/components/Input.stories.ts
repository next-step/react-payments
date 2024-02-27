import type { Meta, StoryObj } from "@storybook/react";
import "../styles/input.css";

import Input from "./Input";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    className: "input-basic",
    onChange: () => {
      console.log("value");
    },
  },
};
