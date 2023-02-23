import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "components/Card";
import CardProps from "components/Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof CardProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardProps> = (args) => <Card {...args} />;

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  size: "small",
  type: "primary",
};

export const Big = Template.bind({});
Big.args = {
  size: "big",
  type: "primary",
};
export const Primary = Template.bind({});
Primary.args = {
  size: "big",
  type: "primary",
};
export const Add = Template.bind({});
Add.args = {
  size: "big",
  type: "add",
};
