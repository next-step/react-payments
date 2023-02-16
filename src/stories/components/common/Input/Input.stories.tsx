import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Input } from "@/components/common";

export default {
  title: "Common/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const BaseInput = Template.bind({});
