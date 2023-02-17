import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { CardPasswordInput } from "@/components/cards";

export default {
  title: "Cards/CardPasswordInput",
  component: CardPasswordInput,
} as ComponentMeta<typeof CardPasswordInput>;

const Template: ComponentStory<typeof CardPasswordInput> = (args) => (
  <CardPasswordInput {...args} />
);

export const BaseCardPasswordInput = Template.bind({});
BaseCardPasswordInput.storyName = "CardPasswordInput";
