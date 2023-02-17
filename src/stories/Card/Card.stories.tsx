import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "../../components/common/Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  input: {},
};

export const Small = Template.bind({});
Small.args = {
  input: {
    title: "title",
    number: "1111 - 2222 - **** - ****",
    name: "name",
    expiry: "10 / 25",
  },
};
