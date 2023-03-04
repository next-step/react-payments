import CardExpirationDateInput from "./cardExpireDate";
import CardNumbersInput from "./cardNumbers";
import CardOwnerInput from "./cardOwner";
import CardPasswordInput from "./cardPassword";
import CardCVCInput from "./cardSecurityNumber";
import SubmitButton from "components/button/submitButton";

import {
  CardInfo,
  CardCompany,
  CardNumber,
  CardPassword,
  ExpirationDate,
} from "store/type";

type CardFormProps = {
  cardNumbers: CardNumber;
  cardExpiration: ExpirationDate;
  cardOwnerName: string;
  cvc: string;
  password: CardPassword;
  cardCompany: CardCompany;
  isModalOpen: boolean;
  handleChangeCardNumber: (cardNumbers: CardNumber) => void;
  handleChangeExpirationDate: (name: string, value: string) => void;
  handleCardOwner: (value: string) => void;
  handleCvc: (value: string) => void;
  handlePassword: (values: CardPassword) => void;
  handleCardSubmit: (payload: CardInfo) => void;
  handleCardCompany: (payload: CardCompany) => void;
};

const CardForm = ({
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
}: CardFormProps) => {
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
        <SubmitButton text={"다음"}/>
      </form>
    </div>
  );
};

export default CardForm;
