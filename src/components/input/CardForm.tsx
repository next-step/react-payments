import { usePayments } from "store/context";
import CardExpirationDateInput from "./cardExpireDate";
import CardNumbersInput from "./cardNumbers";
import CardOwnerInput from "./cardOwner";
import CardPasswordInput from "./cardPassword";
import CardCVCInput from "./cardSecurityNumber";
import SubmitButton from "components/button/submitButton";
import { useRouter } from "hooks/useRouter";
import { ROUTE } from "router";
const CardForm = () => {
  const {
    cardNumbers,
    cardExpiration,
    cardOwnerName,
    cvc,
    password,
    cardCompany,
    handleChangeCardNumber,
    handleChangeExpirationDate,
    handleCardOwner,
    handleCvc,
    handlePassword,
    handleCardSubmit,
  } = usePayments();

  const { go } = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = Date.now();
    handleCardSubmit({
      id,
      cardNumbers,
      cardExpiration,
      cardOwnerName,
      cvc,
      password,
      cardCompany,
    });
    go(ROUTE.REGIST_CARD + `/${id}`);
  };
  return (
    <div>
      <form id="card-from" onSubmit={handleSubmit}>
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
        <SubmitButton />
      </form>
    </div>
  );
};

export default CardForm;
