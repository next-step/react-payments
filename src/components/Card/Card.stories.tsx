import { Story } from "@storybook/react";

import Card, { Props } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
};

const Template: Story<Props> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "SMALL",
};

export const Small = Template.bind({});
Small.args = {
  size: "SMALL",
  cardNumber: ["1111", "2222", "1111", "3434"],
  cardType: "BRAN",
  userName: "오태은",
  expiration: {
    month: "03",
    year: "25",
  },
};

export const BIG = Template.bind({});
BIG.args = {
  size: "BIG",
  cardNumber: ["1111", "2222", "1111", "3434"],
  cardType: "BRAN",
  userName: "오태은",
  expiration: {
    month: "03",
    year: "25",
  },
};
