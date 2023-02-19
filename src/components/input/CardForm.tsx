import { usePayments } from "../../store/context";
import NextButton from "../button/nextButton";
import CardExpirationDateInput from "./cardExpireDate";
import CardNumbersInput from "./cardNumbers";
import CardOwnerInput from "./cardOwner";
import CardPasswordInput from "./cardPassword";
import CardCVCInput from "./cardSecurityNumber";

const CardForm = () => {
  const {
    cardNumbers,
    nextElement,
    expirationDate,
    cardOwnerName,
    cvc,
    password,
    handleCardNumberInput,
    handleExpirationDateInput,
    handleCardOwnerInput,
    handleCvcInput,
    setPasswordByInput,
  } = usePayments();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <form id="card-from" onSubmit={handleSubmit}>
        <CardNumbersInput
          cardNumbers={cardNumbers}
          onChange={handleCardNumberInput}
          nextElement={nextElement}
        />
        <CardExpirationDateInput
          expirationDate={expirationDate}
          onChange={handleExpirationDateInput}
        />
        <CardOwnerInput
          cardOwnerName={cardOwnerName}
          onChange={handleCardOwnerInput}
        />
        <CardCVCInput cvc={cvc} onChange={handleCvcInput} />
        <CardPasswordInput password={password} onChange={setPasswordByInput} />
      </form>
      <NextButton path={"/complete-add-card"} />
    </div>
  );
};

export default CardForm;
