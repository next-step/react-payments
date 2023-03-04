import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "components/common/Button/Button";
import ButtonProps from "components/common/Button/Button";
import { withRouter } from "storybook-addon-react-router-v6";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  decorators: [withRouter],
} as ComponentMeta<typeof ButtonProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonProps> = (args) => <Button {...args} />;

export const XSmall = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
XSmall.args = {
  fontSize: "xs",
  label: "Next",
};

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
