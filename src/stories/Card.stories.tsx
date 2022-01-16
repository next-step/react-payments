import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardData, CardType } from "@common/constants";
import Card from "@components/card";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const CardTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const NewCardTemp = CardTemplate.bind({});
NewCardTemp.args = {
  type: CardType.new,
};

export const EmptyCardTemp = CardTemplate.bind({});
EmptyCardTemp.args = {
  type: CardType.small,
};

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
