import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { CardExpireDateInput } from "@/components/cards";
import { useCardExpireDateInput } from "@/components/cards/CardExpireDateInput/hook";

export default {
  title: "Cards/CardExpireDateInput",
  component: CardExpireDateInput,
  argTypes: {
    cardExpireDate: { control: { type: null } },
  },
} as ComponentMeta<typeof CardExpireDateInput>;

const Template: ComponentStory<typeof CardExpireDateInput> = () => {
  const { cardExpireDate, onCardExpireDateChange } = useCardExpireDateInput({
    month: "",
    year: "",
  });

  return (
    <CardExpireDateInput
      cardExpireDate={cardExpireDate}
      onChange={onCardExpireDateChange}
    />
  );
};

export const BaseCardExpireDateInput = Template.bind({});
BaseCardExpireDateInput.storyName = "CardExpireDateInput";
