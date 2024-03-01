import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "../pages/components/CardNumberInput";

import "../styles/input.css";

const meta = {
  title: "CardNumberInput",
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
    cardNumber: "1234567812345678",
  },
};
