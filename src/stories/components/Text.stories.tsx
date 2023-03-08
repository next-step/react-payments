import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "components/common/Text/Text";
import TextProps from "components/common/Text/Text";
export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof TextProps>;

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
