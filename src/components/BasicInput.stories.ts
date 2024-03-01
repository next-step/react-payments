import { Meta, StoryObj } from "@storybook/react";
import BasicInput from "./BasicInput";

import "../styles/input.css";

const meta = {
  title: "BasicInput",
  component: BasicInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BasicInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "This is label",
    value: "123",
  },
};
