import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "components/common/Button/Button";
import ButtonProps from "components/common/Button/Button";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Button",
  component: Button,
  decorators: [withRouter],
} as ComponentMeta<typeof ButtonProps>;

const Template: ComponentStory<typeof ButtonProps> = (args) => <Button {...args} />;

export const XSmall = Template.bind({});
XSmall.args = {
  fontSize: "xs",
  label: "Next",
};

export const Small = Template.bind({});
Small.args = {
  fontSize: "s",
  label: "Next",
};

export const Medium = Template.bind({});
Medium.args = {
  fontSize: "m",
  label: "Next",
};

export const Large = Template.bind({});
Large.args = {
  fontSize: "lg",
  label: "Next",
};
