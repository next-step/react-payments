import { Meta, StoryObj } from "@storybook/react";
import SelectCardType from "./SelectCardType";

const meta: Meta<typeof SelectCardType> = {
  component: SelectCardType,
  title: "CardRegister/Component/SelectCardType",
};

export default meta;

type Story = StoryObj<typeof SelectCardType>;

export const Primary: Story = {
  args: {},
};
