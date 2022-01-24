import { CardData, CardType } from "@common/constants";
import NextBtn from "@components/button/NextBtn";
import Card from "@components/card";
import { FormEvent, FormEventHandler, useState } from "react";
import CardExpirationInput from "./CardExpirationInput";
import CardNumberInput from "./CardNumberInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
import CardPasswordInput from "./CardPasswordInput";
import SecurityCodeInput from "./SecurityCodeInput";

const inputStateMap = new Map<string, IInputState>();

const AddCardForm = (props: AddCardFormProps) => {
  const onSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    props?.onSubmit && props.onSubmit(e);
  };

  const [isValidForm, setIsValidForm] = useState(false);
  const [cardData, setCardData] = useState<CardData>({});

  const onChangeInputState: OnChangeInputState = (inputState: IInputState) => {
    inputStateMap.set(inputState.name, { ...inputState });

    const validForm = Array.from(inputStateMap.entries()).every(
      ([key, value]) => {
        console.log(key, value);
        return value.isValid;
      }
    );
    console.log(inputState, validForm);
    setIsValidForm(validForm);

    setCardData({
      cardNumber: inputStateMap.get(CardNumberInput.name)?.displayValue ?? "",
      expired: inputStateMap.get(CardExpirationInput.name)?.displayValue ?? "",
      userName: inputStateMap.get(CardOwnerNameInput.name)?.displayValue ?? "",
    });
  };

  return (
    <form onSubmit={onSubmit} className={props.className}>
      <Card type={CardType.small} cardData={cardData} />
      <CardNumberInput onChangeInputState={onChangeInputState} />
      <CardExpirationInput onChangeInputState={onChangeInputState} />
      <CardOwnerNameInput onChangeInputState={onChangeInputState} />
      <CardPasswordInput onChangeInputState={onChangeInputState} />
      <SecurityCodeInput onChangeInputState={onChangeInputState} />
      <NextBtn disabled={!isValidForm} />
    </form>
  );
};

export type OnChangeInputState = (inputState: IInputState) => void;

export interface IInputState {
  value: string;
  displayValue: string;
  isValid: boolean;
  name: string;
}

export interface AddCardFormProps
  extends React.HTMLAttributes<HTMLFormElement> {}

export default AddCardForm;
