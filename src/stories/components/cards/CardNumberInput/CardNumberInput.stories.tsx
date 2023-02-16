import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardNumberInput } from "@/components/cards";

export default {
  title: "Cards/CardNumberInput",
  component: CardNumberInput,
} as ComponentMeta<typeof CardNumberInput>;

const Template: ComponentStory<typeof CardNumberInput> = (args) => (
  <CardNumberInput {...args} />
);

export const BaseCardNumberInput = Template.bind({});
BaseCardNumberInput.storyName = "CardNumberInput";
