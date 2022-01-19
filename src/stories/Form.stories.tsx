import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardExpirationInput from "@components/addCardForm/CardExpirationInput";
import CardOwnerNameInput from "@components/addCardForm/CardOwnerNameInput";
import CardPasswordInput from "@components/addCardForm/CardPasswordInput";
import SecurityCodeInput from "@components/addCardForm/SecurityCodeInput";
import CardNumberInput from "@components/addCardForm/CardNumberInput";
import AddCardForm from "@components/addCardForm/AddCardForm";

export default {
  title: "Components/Form",
};

const CardExpirationInputTemplate: ComponentStory<
  typeof CardExpirationInput
> = (args) => <CardExpirationInput />;
export const CardExpirationInputTemp = CardExpirationInputTemplate.bind({});

const CardNumberInputTemplate: ComponentStory<typeof CardNumberInput> = (
  args
) => <CardNumberInput />;
export const CardNumberInputTemp = CardNumberInputTemplate.bind({});

const CardOwnerNameInputTemplate: ComponentStory<typeof CardOwnerNameInput> = (
  args
) => <CardOwnerNameInput />;
export const InputCardOwnerNameTemp = CardOwnerNameInputTemplate.bind({});

const CardPasswordInputTemplate: ComponentStory<typeof CardPasswordInput> = (
  args
) => <CardPasswordInput />;
export const CardPasswordInputTemp = CardPasswordInputTemplate.bind({});

const SecurityCodeInputTemplate: ComponentStory<typeof SecurityCodeInput> = (
  args
) => <SecurityCodeInput />;
export const SecurityInputTemp = SecurityCodeInputTemplate.bind({});

const AddCardFormTemplate: ComponentStory<typeof AddCardForm> = (args) => (
  <AddCardForm />
);
export const AddCardFormTemp = AddCardFormTemplate.bind({});
