import { usePayments } from "store/context";
import NextButton from "../button/nextButton";
import CardExpirationDateInput from "./cardExpireDate";
import CardNumbersInput from "./cardNumbers";
import CardOwnerInput from "./cardOwner";
import CardPasswordInput from "./cardPassword";
import CardCVCInput from "./cardSecurityNumber";

const CardForm = () => {
  const {
    cardNumbers,
    cardExpiration,
    cardOwnerName,
    cvc,
    password,
    handleChangeCardNumber,
    handleChangeExpirationDate,
    handleCardOwner,
    handleCvc,
    handlePassword,
  } = usePayments();

  return (
    <div>
      <form id="card-from">
        <CardNumbersInput
          cardNumbers={cardNumbers}
          handleChangeCardNumber={handleChangeCardNumber}
        />
        <CardExpirationDateInput
          cardExpiration={cardExpiration}
          handleChangeExpirationDate={handleChangeExpirationDate}
        />
        <CardOwnerInput
          cardOwnerName={cardOwnerName}
          handleCardOwner={handleCardOwner}
        />
        <CardCVCInput cvc={cvc} handleCvc={handleCvc} />
        <CardPasswordInput
          password={password}
          handlePassword={handlePassword}
        />
      </form>
      <NextButton path={"/complete-add-card"} />
    </div>
  );
};

export default CardForm;
