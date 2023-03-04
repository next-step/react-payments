import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "components/common/Text/Text";
import TextProps from "components/common/Text/Text";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TextProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextProps> = (args) => <Text {...args} />;

export const XSmall = Template.bind({});

XSmall.args = {
  fontSize: "xs",
  label: "xsmall",
};
export const Small = Template.bind({});

Small.args = {
  fontSize: "s",
  label: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  fontSize: "m",
  label: "medium",
};
export const Large = Template.bind({});
Large.args = {
  fontSize: "lg",
  label: "large",
};
