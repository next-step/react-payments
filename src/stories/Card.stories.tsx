import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardType } from "@common/constants";
import { CardData } from "@common/defines";
import Card from "@components/card";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const CardTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;
const cardData: CardData = {
  cardName: "TestCardName",
  cardNumber: "1234 - 5678 - **** - ****",
  expired: "12 / 99",
  userName: "TestUserName",
  alias: "TestAlias",
};

export const BigCardTemp = CardTemplate.bind({});
BigCardTemp.args = {
  type: CardType.big,
  cardData,
};

export const SmallCardTemp = CardTemplate.bind({});
SmallCardTemp.args = {
  type: CardType.small,
  cardData,
};
