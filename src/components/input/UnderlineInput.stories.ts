import { Meta, StoryObj } from "@storybook/react";
import UnderlineInput from "./UnderlineInput";

import "../../styles/input.css";

const meta = {
  title: "Common/UnderlineInput",
  component: UnderlineInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UnderlineInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: "123",
    onChange: (value: number | string) => console.log(value),
  },
};
