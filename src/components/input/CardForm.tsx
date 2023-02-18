import CardExpirationDateInput from "./cardExpireDate/input";
import CardNumbersInput from "./cardNumbers/input";
import CardOwnerInput from "./cardOwner/input";
import CardPasswordInput from "./cardPassword/input";
import CardCVCInput from "./cardSecurityNumber/input";

const CardForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <div>
        <form id="card-from" onSubmit={handleSubmit}>
          <CardNumbersInput />
          <CardExpirationDateInput />
          <CardOwnerInput />
          <CardCVCInput />
          <CardPasswordInput />
        </form>
      </div>
    </>
  );
};

export default CardForm;
