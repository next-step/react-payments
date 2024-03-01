import { Meta, StoryObj } from "@storybook/react";
import ExpiredDateInput from "./ExpiredDateInput";

const meta = {
  title: "AddCard/ExpiredDateInput",
  component: ExpiredDateInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExpiredDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    expiredDate: "1203",
  },
};
