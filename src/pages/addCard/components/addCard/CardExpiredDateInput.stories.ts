import { Meta, StoryObj } from "@storybook/react";
import CardExpiredDateInput from "./CardExpiredDateInput";

const meta = {
  title: "AddCard/CardExpiredDateInput",
  component: CardExpiredDateInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardExpiredDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    cardExpiredDate: "1203",
  },
};
