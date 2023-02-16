import { useState } from "react";

import CardNumbersInput from "./CardNumbers/input";
import CardExpirationDateInput from "./CardExpirationDate/input";
import CardOwnerInput from "./CardOwner/input";
import CardCVCInput from "./CardSecurityCode/input";
import CardPasswordInput from "./CardPassword/input";

const CardForm = ({ handleSubmit }) => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const handleCardNumbersChange = (cardNumbers, error) => {
    setCardNumbers(cardNumbers);
    setError(error);
  };

  return (
    <>
      <div id="card-form" className="w-100">
        <form onSubmit={handleSubmit}>
          <CardNumbersInput onChange={handleCardNumbersChange} />
          <CardExpirationDateInput />
          <CardOwnerInput />
          <CardCVCInput />
          <CardPasswordInput />
        </form>
        <div id="card-form-label" style={{ color: "red" }}>
          {error}
        </div>
      </div>
    </>
  );
};

export default CardForm;
