import NextButton from "../button/nextButton";
import CardExpirationDateInput from "./cardExpireDate";
import CardNumbersInput from "./cardNumbers";
import CardOwnerInput from "./cardOwner";
import CardPasswordInput from "./cardPassword";
import CardCVCInput from "./cardSecurityNumber";

const CardForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <form id="card-from" onSubmit={handleSubmit}>
        <CardNumbersInput />
        <CardExpirationDateInput />
        <CardOwnerInput />
        <CardCVCInput />
        <CardPasswordInput />
      </form>
      <NextButton path={"/card-add"} />
    </div>
  );
};

export default CardForm;
