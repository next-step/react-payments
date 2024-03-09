import { Meta, StoryObj } from "@storybook/react";
import PasswordInput from "./PasswordInput";

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  title: "CardRegister/Component/PasswordInput",
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Primary: Story = { args: {} };
