import { usePayments } from "store/context";
import NextButton from "../button/nextButton";
import CardExpirationDateInput from "./cardExpireDate";
import CardNumbersInput from "./cardNumbers";
import CardOwnerInput from "./cardOwner";
import CardPasswordInput from "./cardPassword";
import CardCVCInput from "./cardSecurityNumber";

const CardForm = () => {
  const {
    handleChangeCardNumber,
    handleChangeExpirationDate,
    handleCardOwner,
    handleCvc,
    handlePassword,
  } = usePayments();

  return (
    <div>
      <form id="card-from">
        <CardNumbersInput handleChangeCardNumber={handleChangeCardNumber} />
        <CardExpirationDateInput
          handleChangeExpirationDate={handleChangeExpirationDate}
        />
        <CardOwnerInput handleCardOwner={handleCardOwner} />
        <CardCVCInput handleCvc={handleCvc} />
        <CardPasswordInput handlePassword={handlePassword} />
      </form>
      <NextButton path={"/complete-add-card"} />
    </div>
  );
};

export default CardForm;
