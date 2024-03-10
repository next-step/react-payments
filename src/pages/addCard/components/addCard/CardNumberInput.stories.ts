import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "./CardNumberInput";

const meta = {
  title: "AddCard/CardNumberInput",
  component: CardNumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: "1234567812345678",
    onChange: () => {},
  },
};
