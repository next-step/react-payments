import { CardType, MaxLength } from "@common/constants";
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
    useInput(cardNumConfig),
    useInput(cardNumConfig),
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
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    props?.onSubmit && props.onSubmit(e);
  };

  return (
    <form onSubmit={onSubmit} className={props.className}>
      <Card type={CardType.small} cardData={undefined} />
      <CardNumberInput cardNumInputStateList={cardNumInputStateList} />
      <CardExpirationInput
        monthInputState={monthInputState}
        yearInputState={yearInputState}
      />
      <CardOwnerNameInput ownerNameInputState={ownerNameInputState} />
      <CardPasswordInput passwordInputStateList={passwordInputStateList} />
      <SecurityCodeInput securityCodeInputState={securityCodeInputState} />
      <NextBtn />
    </form>
  );
};

export interface AddCardFormProps
  extends React.HTMLAttributes<HTMLFormElement> {}

export default AddCardForm;
