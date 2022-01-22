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
> = (args) => <CardExpirationInput {...args} />;

export const CardExpirationInputTemp = CardExpirationInputTemplate.bind({});

CardExpirationInputTemp.args = {};

const CardNumberInputTemplate: ComponentStory<typeof CardNumberInput> = (
  args
) => <CardNumberInput {...args} />;
export const CardNumberInputTemp = CardNumberInputTemplate.bind({});

const CardOwnerNameInputTemplate: ComponentStory<typeof CardOwnerNameInput> = (
  args
) => <CardOwnerNameInput {...args} />;
export const InputCardOwnerNameTemp = CardOwnerNameInputTemplate.bind({});

const CardPasswordInputTemplate: ComponentStory<typeof CardPasswordInput> = (
  args
) => <CardPasswordInput {...args} />;
export const CardPasswordInputTemp = CardPasswordInputTemplate.bind({});

const SecurityCodeInputTemplate: ComponentStory<typeof SecurityCodeInput> = (
  args
) => <SecurityCodeInput {...args} />;
export const SecurityInputTemp = SecurityCodeInputTemplate.bind({});

const AddCardFormTemplate: ComponentStory<typeof AddCardForm> = (args) => (
  <AddCardForm />
);
export const AddCardFormTemp = AddCardFormTemplate.bind({});
