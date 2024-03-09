import { PinInput } from "@/components/atom/PinInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PinInput> = {
  title: "Atom/PinInput",
  component: PinInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    mask: {
      defaultValue: false,
      description: "input type password 형식으로 입력값을 보여주는 옵션",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PinInput>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};
export const Mask: Story = {
  args: {
    mask: true,
  },
};
