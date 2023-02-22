import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { CardNumberInput } from "@/components/cards";
import { useCardNumberInput } from "@/components/cards/CardNumberInput/hook";

export default {
  title: "Cards/CardNumberInput",
  component: CardNumberInput,
} as ComponentMeta<typeof CardNumberInput>;

const Template: ComponentStory<typeof CardNumberInput> = () => {
  const { cardNumber, onCardNumberChange } = useCardNumberInput({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  });

  return (
    <CardNumberInput cardNumber={cardNumber} onChange={onCardNumberChange} />
  );
};

export const BaseCardNumberInput = Template.bind({});
BaseCardNumberInput.storyName = "CardNumberInput";
