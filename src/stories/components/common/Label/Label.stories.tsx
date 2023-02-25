import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Label } from "@/components/common";

export default {
  title: "Common/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>THIS IS LABEL</Label>
);

export const BaseLabel = Template.bind({});
BaseLabel.storyName = "Label";
