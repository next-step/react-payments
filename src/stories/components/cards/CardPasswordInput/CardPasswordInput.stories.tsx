import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { CardPasswordInput } from "@/components/cards";
import { useCardPasswordInput } from "@/components/cards/CardPasswordInput/hook";

export default {
  title: "Cards/CardPasswordInput",
  component: CardPasswordInput,
} as ComponentMeta<typeof CardPasswordInput>;

const Template: ComponentStory<typeof CardPasswordInput> = () => {
  const { cardPassword, onCardPasswordChange } = useCardPasswordInput({
    password1: "",
    password2: "",
  });

  return (
    <CardPasswordInput
      cardPassword={cardPassword}
      onChange={onCardPasswordChange}
    />
  );
};

export const BaseCardPasswordInput = Template.bind({});
BaseCardPasswordInput.storyName = "CardPasswordInput";
