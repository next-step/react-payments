import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "components/Input/Input";
import InputProps from "components/Input/Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InputProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
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
