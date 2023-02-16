import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { CardOwnerInput } from "@/components/cards";

export default {
  title: "Cards/CardOwnerInput",
  component: CardOwnerInput,
} as ComponentMeta<typeof CardOwnerInput>;

const Template: ComponentStory<typeof CardOwnerInput> = (args) => (
  <CardOwnerInput {...args} />
);

export const BaseCardOwnerInput = Template.bind({});
BaseCardOwnerInput.storyName = "CardOwnerInput";
