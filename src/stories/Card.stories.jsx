import React from "react";
import Card from "./Card";

export default {
  title: "payments-example/Card",
  component: Card,
  argTypes: {
    isRegistered: true,
  },
};

const Template = args => <Card {...args} />;

export const SmallCard = Template.bind({});

SmallCard.args = {
  isRegistered: true,
};

export const BigCard = Template.bind({});

SmallCard.args = {
  isRegistered: true,
  cardInfo: {
    company: "농협카드",
    number: "1234-4565-7865-8888",
    owner: "HYEWON",
    expiry: "11/24",
    nickname: "생활비",
    cvc: "564",
    password1: "2",
    password2: "7",
    backgroundColor: "skyblue",
  },
};
