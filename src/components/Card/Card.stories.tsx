import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    expirationDate: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "name",
  expirationDate: "MM/YY",
  size: "sm",
};

export const Custom = Template.bind({});

Custom.args = {
  nickname: "포코카드",
  name: "name",
  number: "1111222233334444",
  expirationDate: "MM/YY",
  size: "sm",
  bgColor: "#e24141",
  textColor: "#fff",
};
