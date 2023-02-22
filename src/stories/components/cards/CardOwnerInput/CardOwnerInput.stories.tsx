import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { CardOwnerInput } from "@/components/cards";
import { useCardOwnerInput } from "@/components/cards/CardOwnerInput/hook";

export default {
  title: "Cards/CardOwnerInput",
  component: CardOwnerInput,
} as ComponentMeta<typeof CardOwnerInput>;

const Template: ComponentStory<typeof CardOwnerInput> = () => {
  const { cardOwnerName, onCardOwnerNameChange } = useCardOwnerInput({
    ownerName: "",
  });

  return (
    <CardOwnerInput
      cardOwnerName={cardOwnerName.ownerName}
      onChange={onCardOwnerNameChange}
    />
  );
};

export const BaseCardOwnerInput = Template.bind({});
BaseCardOwnerInput.storyName = "CardOwnerInput";
