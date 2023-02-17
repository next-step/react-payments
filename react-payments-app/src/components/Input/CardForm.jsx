import { useState } from "react";

import CardNumbersInput from "./CardNumbers/input";
import CardExpirationDateInput from "./CardExpirationDate/input";
import CardOwnerInput from "./CardOwner/input";
import CardCVCInput from "./CardSecurityCode/input";
import CardPasswordInput from "./CardPassword/input";

const CardForm = ({ onSubmit }) => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [expirationDate, setExpirationDate] = useState(["", ""]);
  const [cardOwner, setCardOwner] = useState("");
  const [CVC, setCVC] = useState("");
  const [password, setPassword] = useState(["", ""]);
  const [error, setError] = useState("");

  const handleCardNumbersChange = (cardNumbers, error) => {
    setCardNumbers(cardNumbers);
    setError(error);
  };

  const handleExpirationDateChange = (expirationDate, error) => {
    setExpirationDate(expirationDate);
    setError(error);
  };

  const handleCardOwnerChange = (cardOwner, error) => {
    setCardOwner(cardOwner);
    setError(error);
  };

  const handleCVCChange = (CVC, error) => {
    setCVC(CVC);
    setError(error);
  };

  const handlePasswordChange = (password, error) => {
    setPassword(password);
    setError(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(password);
    onSubmit({ cardNumbers, expirationDate, cardOwner, CVC, password });
  };

  return (
    <>
      <div id="card-form" className="w-100">
        <form onSubmit={handleSubmit}>
          <CardNumbersInput onChange={handleCardNumbersChange} />
          <CardExpirationDateInput onChange={handleExpirationDateChange} />
          <CardOwnerInput onChange={handleCardOwnerChange} />
          <CardCVCInput onChange={handleCVCChange} />
          <CardPasswordInput
            onChange={handlePasswordChange}
            handleSubmit={handleSubmit}
          />
        </form>
        <div id="card-form-label" style={{ color: "red" }}>
          {error}
        </div>
      </div>
    </>
  );
};

export default CardForm;
