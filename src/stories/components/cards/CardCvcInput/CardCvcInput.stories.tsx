import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import CardCvcInput from "@/components/cards/CardCvcInput";

export default {
  title: "Cards/CardCvcInput",
  component: CardCvcInput,
} as ComponentMeta<typeof CardCvcInput>;

const Template: ComponentStory<typeof CardCvcInput> = (args) => (
  <CardCvcInput {...args} />
);

export const BaseCardCvcInput = Template.bind({});
BaseCardCvcInput.storyName = "CardCvcInput";
