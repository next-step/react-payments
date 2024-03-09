import { Input } from "@/components/atom/forms/Input";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Atom/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { description: "다양한 input 종류" },
  },
  decorators: [
    (Story) => {
      const props = Object(Story().props);
      return <Input {...props} />;
    },
  ],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const BorderLess: Story = {
  args: {
    variant: "borderLess",
  },
};
