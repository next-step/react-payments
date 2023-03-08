import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "components/common/Input/Input";
import InputProps from "components/common/Input/Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof InputProps>;

const Template: ComponentStory<typeof InputProps> = (args) => <Input {...args} />;

export const primary = Template.bind({});

primary.args = {
  theme: "primary",
  placeholder: "primary",
  active: true,
};
export const underline = Template.bind({});

underline.args = {
  theme: "underline",
  placeholder: "underline",
  active: true,
};
