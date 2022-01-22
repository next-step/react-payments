import { CardType } from "@common/constants";
import NextBtn from "@components/button/NextBtn";
import Card from "@components/card";
import { FormEvent, FormEventHandler } from "react";
import CardExpirationInput from "./CardExpirationInput";
import CardNumberInput from "./CardNumberInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
import CardPasswordInput from "./CardPasswordInput";
import SecurityCodeInput from "./SecurityCodeInput";

const AddCardForm = (props: AddCardFormProps) => {
  const onSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    props?.onSubmit && props.onSubmit(e);
  };

  return (
    <form onSubmit={onSubmit} className={props.className}>
      <Card type={CardType.small} cardData={undefined} />
      <CardNumberInput />
      <CardExpirationInput />
      <CardOwnerNameInput />
      <CardPasswordInput />
      <SecurityCodeInput />
      <NextBtn />
    </form>
  );
};

export interface AddCardFormProps
  extends React.HTMLAttributes<HTMLFormElement> {}

export default AddCardForm;
