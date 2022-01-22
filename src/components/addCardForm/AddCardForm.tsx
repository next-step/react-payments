import { CardData, CardType, InputType, MaxLength } from "@common/constants";
import NextBtn from "@components/button/NextBtn";
import Card from "@components/card";
import useInput, { IUseInputConfig, IUseInputState } from "@hooks/useInput";
import { FormEvent, FormEventHandler } from "react";
import CardExpirationInput from "./CardExpirationInput";
import CardNumberInput from "./CardNumberInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
import CardPasswordInput from "./CardPasswordInput";
import SecurityCodeInput from "./SecurityCodeInput";

const AddCardForm = (props: AddCardFormProps) => {
  const digitRegex = /^$|^\d*$/;
  const alphabetRegex = /^$|^[A-Za-z]*$/;

  const cardNumConfig: IUseInputConfig = {
    inputRegex: digitRegex,
    validator: (val) => val.length === MaxLength.CardNumberInput,
  };

  const cardNumInputStateList: IUseInputState[] = [
    useInput(cardNumConfig),
    useInput(cardNumConfig),
    useInput({ ...cardNumConfig, type: InputType.password }),
    useInput({ ...cardNumConfig, type: InputType.password }),
  ];

  const monthInputState = useInput({
    inputRegex: digitRegex,
    validator: (val) => +val > 0 && +val <= 12,
  });

  const yearInputState = useInput({
    inputRegex: digitRegex,
    validator: (val) => val.length === MaxLength.CardExpirationInput,
  });

  const passwordInputConfig: IUseInputConfig = {
    inputRegex: digitRegex,
    validator: (val) => val.length === MaxLength.CardPasswordInput,
    type: InputType.password,
  };

  const passwordInputStateList: IUseInputState[] = [
    useInput(passwordInputConfig),
    useInput(passwordInputConfig),
  ];

  const ownerNameInputState = useInput({
    inputRegex: alphabetRegex,
    validator: (val) => val.length > 0,
  });

  const securityCodeInputState = useInput({
    inputRegex: digitRegex,
    validator: (val) => val.length === MaxLength.CardSecurityCodeInput,
    type: InputType.password,
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    props?.onSubmit && props.onSubmit(e);
  };

  const isValidForm =
    cardNumInputStateList.every((state) => state.isValid) &&
    monthInputState.isValid &&
    yearInputState.isValid &&
    ownerNameInputState.isValid &&
    passwordInputStateList.every((state) => state.isValid) &&
    securityCodeInputState.isValid;

  console.log(`isValidForm: ${isValidForm}, cardNum: ${cardNumInputStateList.every(
    (state) => state.isValid
  )}
    monthInputState: ${monthInputState.isValid} 
    yearInputState:${yearInputState.isValid} 
    ownerNameInputState: ${ownerNameInputState.isValid}
    passwordInputStateList: ${passwordInputStateList.every(
      (state) => state.isValid
    )}
    securityCodeInputState: ${securityCodeInputState.isValid}
    `);

  const cardData: CardData = {
    cardNumber: cardNumInputStateList
      .map((numInputState) =>
        numInputState.type === InputType.password
          ? "*".repeat(numInputState.value.length)
          : numInputState.value
      )
      .filter((inputVal) => inputVal.length > 0)
      .join(" - "),
    expired: [monthInputState.value, yearInputState.value]
      .filter((inputVal) => inputVal.length > 0)
      .join(" / "),
    userName: ownerNameInputState.value,
  };
  const hasCardData: boolean =
    cardData.cardNumber!.length > 0 ||
    cardData.expired!.length > 0 ||
    cardData.userName!.length > 0;

  return (
    <form onSubmit={onSubmit} className={props.className}>
      <Card
        type={CardType.small}
        cardData={hasCardData ? cardData : undefined}
      />
      <CardNumberInput cardNumInputStateList={cardNumInputStateList} />
      <CardExpirationInput
        monthInputState={monthInputState}
        yearInputState={yearInputState}
      />
      <CardOwnerNameInput ownerNameInputState={ownerNameInputState} />
      <CardPasswordInput passwordInputStateList={passwordInputStateList} />
      <SecurityCodeInput securityCodeInputState={securityCodeInputState} />
      <NextBtn disabled={!isValidForm} />
    </form>
  );
};

export interface AddCardFormProps
  extends React.HTMLAttributes<HTMLFormElement> {}

export default AddCardForm;
