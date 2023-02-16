import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { CardExpireDateInput } from "@/components/cards";

export default {
  title: "Cards/CardExpireDateInput",
  component: CardExpireDateInput,
} as ComponentMeta<typeof CardExpireDateInput>;

const Template: ComponentStory<typeof CardExpireDateInput> = (args) => (
  <CardExpireDateInput {...args} />
);

export const BaseCardExpireDateInput = Template.bind({});
BaseCardExpireDateInput.storyName = "CardExpireDateInput";
