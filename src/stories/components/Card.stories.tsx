import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "components/Card/Card";
import CardProps from "components/Card/Card";
import { withRouter } from "storybook-addon-react-router-v6";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Card",
  component: Card,
  decorators: [withRouter],
} as ComponentMeta<typeof CardProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardProps> = (args) => <Card {...args} />;

export const SmallPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SmallPrimary.args = {
  size: "small",
  type: "primary",
  id: "1",
  company: "토스카드",
  color: "blue",
  expireMonth: "01",
  expireYear: "23",
  ownerName: "문준영",
};

export const BigPrimary = Template.bind({});
BigPrimary.args = {
  size: "big",
  type: "primary",
  id: "1",
  company: "토스카드",
  color: "blue",
  expireMonth: "01",
  expireYear: "23",
  ownerName: "문준영",
};

export const AddCard = Template.bind({});
AddCard.args = {
  size: "big",
  type: "add",
};
