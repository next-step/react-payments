import { Meta, StoryObj } from "@storybook/react";
import CvcInput from "./CvcInput";

const meta: Meta<typeof CvcInput> = {
  component: CvcInput,
  title: "CardRegister/Component/CvcInput",
};

export default meta;

type Story = StoryObj<typeof CvcInput>;

export const ExistedValue: Story = {
  args: {
    value: "123",
  },
};

export const Primary: Story = {
  args: {},
};
