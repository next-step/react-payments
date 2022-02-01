import NextBtn from "@components/button/NextBtn";
import { useCardData } from "@context/cardData";
import { FieldValues, useForm } from "@hooks/useForm";
import { useEffect } from "react";
import CardExpirationInput from "./CardExpirationInput";
import CardNumberInput from "./CardNumberInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
import CardPasswordInput from "./CardPasswordInput";
import SecurityCodeInput from "./SecurityCodeInput";
import { createCardDataByFormData } from "./utils";

const AddCardForm = ({ className, handleFormData }: AddCardFormProps) => {
  const { handleSubmit, register, watch, addOnWatchEvent } = useForm();
  const { setTempCardData } = useCardData();

  const onWatch = () => {
    const formData = watch();
    const cardData = createCardDataByFormData(formData);
    setTempCardData(cardData);
  };

  useEffect(() => addOnWatchEvent(onWatch), []);

  const onInvalid = (error: string) => {
    console.log("error!!!");
  };

  return (
    <form {...handleSubmit(handleFormData, onInvalid)} className={className}>
      <CardNumberInput register={register} watch={watch} />
      <CardExpirationInput register={register} watch={watch} />
      <CardOwnerNameInput register={register} watch={watch} />
      <CardPasswordInput register={register} />
      <SecurityCodeInput register={register} />
      <NextBtn />
    </form>
  );
};

export interface AddCardFormProps
  extends React.HTMLAttributes<HTMLFormElement> {
  handleFormData?: (data: FieldValues) => void;
}

export default AddCardForm;
