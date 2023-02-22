import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Card } from "@/components/cards";

export default {
  title: "Cards/Card",
  component: Card,
  args: {
    size: "big",
    cardInfo: {
      cardName: "My Card",
      cardNumber: {
        num1: "1111",
        num2: "1111",
        num3: "1111",
        num4: "1111",
      },
      cardOwnerName: "Lee Jae Yun",
      expireDate: "11/11",
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const BaseCard = Template.bind({});
BaseCard.storyName = "Card";
