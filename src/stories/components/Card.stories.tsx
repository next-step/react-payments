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
  company: "국민카드",
  ownerName: "Name",
  expirationMonth: "MM",
  expirationYear: "YY",
};

export const Big = Template.bind({});
Big.args = {
  size: "big",
  company: "국민카드",
  ownerName: "Name",
  expirationMonth: "MM",
  expirationYear: "YY",
};
