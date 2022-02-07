import CardNumberInput from "../CardNumberInput";
import ExpiryDateInput from "../ExpiryDateInput";
import CardOwnerInput from "../CardOwnerInput/CardOwnerInput";
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
}) => (
  <form>
    <CardNumberInput
      fields={cardNumbers}
      onChange={onChangeMultipleInput}
    />
    <ExpiryDateInput
      fields={expiryDate}
      onChange={onChangeMultipleInput}
    />
    <CardOwnerInput
      value={cardOwner}
      onChange={onChangeSingleInput}
    />
    <InputStyle.Container>
      <InputStyle.Label htmlFor="security-number">
        보안코드(CVC/CVV)
      </InputStyle.Label>
      <Input
        id="security-number"
        type="password"
        name="securityNumber"
        value={securityNumber}
        maxLength={3}
        onChange={onChangeSingleInput}
        background
      />
    </InputStyle.Container>
    <CardPasswordInput
      fields={cardPassword}
      onChange={onChangeMultipleInput}
    />
  </form>
);
export default AddCardForm;
