import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {},
};

export const Underbar: Story = {
  args: {
    hasUnderbar: true,
    textAlign: "center",
  },
};
