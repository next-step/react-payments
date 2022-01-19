import CardNumberInput from "../CardNumberInput";
import ExpiryDateInput from "../ExpiryDateInput";
import CardPasswordInput from "../CardPasswordInput";
import Input from "../Input";

import * as InputStyle from "../../style/input";

const AddCardForm = ({
  fields: {
    cardNumbers,
    expiryDate,
    cardOwner,
    securityNumber,
    cardPassword,
  },
  onChangeMultipleInput,
  onChangeSingleInput,
}) => {
  const handleChangeSingleInput = ({ name, value }) => {
    onChangeSingleInput({ name, value });
  };

  return (
    <form>
      <CardNumberInput
        fields={cardNumbers}
        onChange={onChangeMultipleInput}
      />
      <ExpiryDateInput
        fields={expiryDate}
        onChange={onChangeMultipleInput}
      />
      <InputStyle.Container>
        <InputStyle.LabelGroup>
          <label htmlFor="card-owner">카드 소유자이름(선택)</label>
          <span>{cardOwner?.length}/30</span>
        </InputStyle.LabelGroup>
        <Input
          field={{
            id: "card-owner",
            name: "cardOwner",
            value: cardOwner,
            maxLength: 30,
          }}
          onChange={handleChangeSingleInput}
          background
        />
      </InputStyle.Container>
      <InputStyle.Container>
        <InputStyle.Label htmlFor="security-number">
          보안코드(CVC/CVV)
        </InputStyle.Label>
        <Input
          field={{
            id: "security-number",
            type: "password",
            name: "securityNumber",
            value: securityNumber,
            maxLength: 3,
          }}
          onChange={handleChangeSingleInput}
          background
        />
      </InputStyle.Container>
      <CardPasswordInput
        fields={cardPassword}
        onChange={onChangeMultipleInput}
      />
    </form>
  );
};

export default AddCardForm;
