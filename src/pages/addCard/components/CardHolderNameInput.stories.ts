import { Meta, StoryObj } from "@storybook/react";
import CardHolderNameInput from "./CardHolderNameInput";

const meta = {
  title: "AddCard/CardHolderNameInput",
  component: CardHolderNameInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardHolderNameInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    cardHolderName: "MyNameIs",
  },
};
